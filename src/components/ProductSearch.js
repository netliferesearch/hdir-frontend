import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce } from 'lodash';
import InputSearch from './InputSearch'
import ChapterHeading from './ChapterHeading'
import NavList from './NavList'
import Button from './Button'


const mainClasses = (collapsed) =>
  classNames({
    'b-product-search': true,
    'b-product-search--collapsed': collapsed,
  });

const contentClasses = (toggled) =>
  classNames({
    'b-product-search': true,
    'b-product-search__content': toggled,
    'b-product-search--hidden': !toggled
  });

const ProductSearch = ({ label, productId, collapsed, flatTree, malgruppe, endpoint }) => {
  const [toggled, setToggled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleMoreRecommendations, setToggleMoreRecommendations] = useState(false);
  const [toggleMoreChapters, setToggleMoreChapters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const liveSearchUrl = endpoint
    ? endpoint
    : 'https://helsedir-helsenett-xptest.enonic.cloud/retningslinjer/adhd/_/service/helsedirektoratet/realtimesearch';

  useEffect(() => {
    if (collapsed === true && toggled === false) {
      setToggled(true);
    }
    // eslint-disable-next-line
  }, [collapsed]);

  function toggle() {
    setToggled(!toggled);
  }

  // const doSearch = (formData) =>
  const fetchResults = (formData) =>
    fetch(`${liveSearchUrl}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data)
        setSearchResults(data);
        setToggleMoreRecommendations(false);
        setToggleMoreChapters(false);
        setLoading(false);
        updateInternalLinksToCollapsibles();
      });

  const debouncedChange = useCallback(
    (value) => {
      if (value.length > 2) {
        setSearchString(value);
        setLoading(true);
        let formData = new FormData();
        formData.append('contentId', productId);
        formData.append('searchQuery', value);
        formData.append('malgruppe', malgruppe);
        formData.append('flatTree', flatTree);
        doSearch(formData);
        console.log(flatTree)
      }
      if (value.length === 0) {
        setSearchResults('');
        setSearchString('');
      }
    },
    // eslint-disable-next-line
    [doSearch],
  );
  // eslint-disable-next-line
  const doSearch = useMemo(() => debounce(fetchResults, 500, true), [debouncedChange]);

  const updateInternalLinksToCollapsibles = () => {
    // If internal link to collapsible (i.e. search results), we need to trigger target collapsible
    // Checking if target exists before proceeding, in case the internal link is for something else

    const collapsibleInternalLink = [
      ...document.querySelectorAll(".results a[href]")
    ];
    collapsibleInternalLink.forEach(item => {
      item.addEventListener("click", (event) => {
        const target = item.getAttribute("href");

        // No hash, exit
        if (!target.includes('#')) {
          return;
        }

        const targetUrl = target.split("#")[0];
        const targetHash = target.split("#")[1];
        const currentUrl = window.location.href.replace(window.location.hash, "");

        // Another URL, exit
        if (targetUrl !== currentUrl) {
          return;
        }

        if (document.getElementById(targetHash)) {
          const targetCollapsible = document.getElementById(targetHash);
          const targetCollapsibleTrigger = targetCollapsible.parentNode.querySelectorAll('button')[0];
          const isActive = targetCollapsible.parentNode.classList.contains('b-collapsible--active');

          // TOOD: If collapsible is already open, make sure the offset position is correct
          if (isActive) {
            targetCollapsibleTrigger.parentNode.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            event.preventDefault();
            return
          }
          targetCollapsibleTrigger.click();
          event.preventDefault();
        }
      }, false);
    });

  }

  const getHighlightedText = (text, highlight) => {
    if (highlight.length < 2) {
      return text;
    }
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return [
      parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <strong>{part}</strong> : part)
    ]
  }

  // Construct an object containing all results/data
  const modifiedResult = () => ({
    total: searchResults.total || null,
    anbefaling:
      searchResults.anbefaling && searchResults.anbefaling.length > 0 ? searchResults.anbefaling.map(result => {
        return {
          title: getHighlightedText(result.title, searchString),
          meta: result.chapter,
          url: result.url
        }
      }) : [],
    kapittel:
      searchResults.kapittel && searchResults.kapittel.length > 0 ? searchResults.kapittel.map(result => {
        return {
          title: getHighlightedText(result.title, searchString),
          meta: '',
          url: result.url
        }
      }) :[]
  })

  // Split arrays in two, so we can have "See all" toggle buttons
  const recommendations = modifiedResult().anbefaling.splice(0, 7);
  const recommendationsRest = modifiedResult().anbefaling.length > 7 ? modifiedResult().anbefaling.splice(7) : null;
  const chapters = modifiedResult().kapittel.splice(0, 7);
  const chaptersRest = modifiedResult().kapittel.length > 7 ? modifiedResult().kapittel.splice(7) : null;

  return (
    <>
    { collapsed ? (
      <div className={mainClasses(collapsed)}>
        <div className={contentClasses(true)}>
          <InputSearch
            id="produktsok"
            label={`Søk i ${label}`}
            autoFocus={toggled}
            showSuggestions={false}
            fnChange={toggled ? debouncedChange : null}
            productId={productId}
          />
        </div>
      </div>
    ) : (
      <div className={mainClasses()}>
        <Button
          onClick={toggle}
          clean
          icon={!toggled ? `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjEgKDcyNjMxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJzZWFyY2giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiIHN0cm9rZT0iIzAyNTE2OSI+CiAgICAgICAgICAgIDxnIGlkPSJJbnRlcmZhY2UtRXNzZW50aWFsX194MkZfX1NlYXJjaF9feDJGX19zZWFyY2giIHN0cm9rZS13aWR0aD0iMS4wNDM0Ij4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cF8zNzIiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJzZWFyY2giPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4zLDE2LjcgQzEyLjksMTYuNyAxNi42LDEzIDE2LjYsOC40IEMxNi42LDMuOCAxMywwIDguMywwIEMzLjcsMCAwLDMuNyAwLDguMyBDMCwxMi45IDMuNywxNi43IDguMywxNi43IFoiIGlkPSJPdmFsXzI4OCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuMiwxNC4zIEwyNCwyNCIgaWQ9IlNoYXBlXzE4NzIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTguNSwzIEM1LjUsMyAzLDUuNSAzLDguNSIgaWQ9Ik92YWxfMjg4XzJfIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=`
          : `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTM3LjMwNCAxMS4yODJsMS40MTQgMS40MTQtMjYuMDIyIDI2LjAyLTEuNDE0LTEuNDEzeiIgZmlsbD0iMDY2N0M2IiAvPjxwYXRoIGQ9Ik0xMi42OTYgMTEuMjgybDI2LjAyMiAyNi4wMi0xLjQxNCAxLjQxNS0yNi4wMjItMjYuMDJ6IiBmaWxsPSIwNjY3QzYiIC8+PC9zdmc+`}>
          {
            toggled ? 'Skjul søk' : `Søk i ${label}`
          }
        </Button>
        <div className={contentClasses(toggled)}>
          <InputSearch
            id="produktsok"
            label={`Søk i ${label}`}
            autoFocus={toggled}
            showSuggestions={false}
            fnChange={toggled ? debouncedChange : null}
            productId={productId}
          />
        </div>
      </div>
    )}

      {loading ? (
        <div>
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50">
            <path fill="#0667c6" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.8s"
                repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      ) : null}

      {toggled && searchString.length > 0 && modifiedResult().total > 0 && (
        <div className="l-mb-4 results">
            {
              searchString && modifiedResult().total > 0 ? (
              <h2 className="b-product-search__title">
                {modifiedResult().total} treff på «{searchString}» i {label}
              </h2>
              ) : null
            }
            {
            recommendations.length > 0 ? (
                <div className="col-xs-12 l-mt-2">
                  <ChapterHeading
                    heading="Anbefalinger"
                    h={'h3'}
                    clean
                  />
                  <hr className="b-hr b-hr--blue" />
                  <NavList
                    noArrow
                  list={recommendations}
                  />
                  {
                    recommendationsRest ? (
                    <div className="l-mt-1">
                      <Button onClick={() => setToggleMoreRecommendations(!toggleMoreRecommendations)} secondary>Vis alle ({modifiedResult().anbefaling.length})</Button>
                    </div>
                    ) : null
                  }

                  {
                    toggleMoreRecommendations ? (
                    <NavList
                      noArrow
                      list={recommendationsRest}
                    />
                    ) : null
                  }
                </div>
              ) : null
            }
            {
              chapters.length > 0 ? (
                <div className="col-xs-12 l-mt-2 l-mb-3">
                  <ChapterHeading
                    heading="Kapitler"
                    h={'h3'}
                    clean
                  />
                  <hr className="b-hr b-hr--blue" />
                  <NavList
                    noArrow
                    list={chapters}
                  />
                  {
                    chaptersRest ? (
                      <div className="l-mt-1">
                      <Button onClick={() => setToggleMoreChapters(!toggleMoreChapters)} secondary>Vis alle ({modifiedResult().kapittel.length})</Button>
                      </div>
                    ) : null
                  }
                  {
                    toggleMoreChapters === true ? (
                      <NavList
                        noArrow
                        list={chaptersRest}
                      />
                    ) : null
                  }
                </div>
              ) : null
            }
        </div>
      )}
      {
        toggled && searchString.length > 0 && !loading && searchResults.total === 0 ? (
          <div className="l-mb-4">
            <div className="col-xs-12 l-mt-2 l-mb-3">
              <p>0 treff på «{searchString}» i {label}</p>
            </div>
          </div>
        ) : null
      }
    </>
  );
}

ProductSearch.propTypes = {
  label: PropTypes.string,
  productId: PropTypes.string,
  collapsed: PropTypes.bool,
};

export default ProductSearch;
