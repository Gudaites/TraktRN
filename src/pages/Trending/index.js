import React, { useEffect, useCallback } from 'react';

// React Redux
import { useSelector, useDispatch } from 'react-redux';

import { api, apiFanart } from '../../services/api';
import { SafeAreaView, FlatList, ViewLoad, IconLoad } from './styles';

import Filter from '../Components/Filter';
import { Card } from '../Components/Card';

const Trending = () => {
  const dispatch = useDispatch();
  const { trending, trendingPage } = useSelector(state => state);

  useEffect(() => {
    if (trending.length === 0) {
      loadRepositories();
    }
  }, [loadRepositories]);

  const loadRepositories = useCallback(async () => {
    (async () => {
      const { data } = await api.get(`movies/trending?page=${trendingPage}`);
      trending.push(...data);
      await Promise.all(
        data.map(async item => {
          const info = await apiFanart.get(
            `${item.movie.ids.tmdb}?api_key=f98a0ebf05f1ea85544a78f3bc54fde2`,
          );
          item.movie.movieInfo = {
            resume: info.data.overview,
            title: info.data.original_title,
            poster: info.data.poster_path,
            status: info.data.status,
          };
        }),
      );
      dispatch({
        type: 'SET_TRENDING',
        payload: trending,
        page: trendingPage + 1,
      });
    })();
  }, [dispatch, trending, trendingPage]);

  const filterChange = async filter => {
    dispatch({
      type: 'SET_TRENDING_FILTER',
      payload: filter,
      page: 1,
    });
  };

  const renderItem = ({ item, index }) => (
    <Card index={index} item={item.movie} />
  );

  return (
    <>
      {/* <Filter options={filters} setFilter={filterChange} /> */}
      <SafeAreaView>
        {trending !== null && (
          <FlatList
            initialNumToRender={10}
            data={trending}
            renderItem={renderItem}
            keyExtractor={item =>
              `${item.movie.ids.imdb}${Math.random().toString(36).substring(7)}`
            }
            onEndReached={() => loadRepositories()}
            onEndReachedThreshold={0.1}
            // Performance
            removeClippedSubviews
            maxToRenderPerBatch={1}
            updateCellsBatchingPeriod={100}
            windowSize={7}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default Trending;
