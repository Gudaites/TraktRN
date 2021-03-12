import React, { useEffect, useCallback } from 'react';

// React Redux
import { useSelector, useDispatch } from 'react-redux';

import { api, apiFanart } from '../../services/api';
import { SafeAreaView, FlatList, ViewLoad, IconLoad } from './styles';

import Filter from '../Components/Filter';
import { Card } from '../Components/Card';

const Trending = () => {
  const dispatch = useDispatch();
  const { trending, trendingPage, filters } = useSelector(state => state);

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
          try {
            const infos = await apiFanart.get(
              `${item.movie.ids.tmdb}?api_key=023cb0942e00e8768646256b062d29d6`,
            );
            item.movie.movieposter = infos.data.movieposter
              ? infos.data.movieposter[0]
              : null;
          } catch (e) {
            item.movie.movieposter = null;
          }
        }),
      );
      dispatch({
        type: 'SET_TRENDING',
        payload: trending,
        page: trendingPage + 1,
      });
    })();
  }, [dispatch, trending, trendingPage]);

  const renderItem = ({ item, index }) => (
    <Card index={index} item={item.movie} />
  );

  return (
    <>
      <Filter options={filters} />
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
