import React, { useEffect, useCallback, useState } from 'react';

// React Redux
import { useSelector, useDispatch } from 'react-redux';

import { api, apiTMDB } from '../../services/api';
import {
  SafeAreaView,
  FlatList,
  ViewLoad,
  IconLoad,
  HeaderView,
  HeaderText,
} from './styles';

import { Card } from '../Components/Card';

const Trending = () => {
  const dispatch = useDispatch();
  const { trending, trendingPage } = useSelector(state => state);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (trending.length === 0) {
      loadRepositories();
    }
  }, [loadRepositories]);

  const loadRepositories = useCallback(async () => {
    if (isLoad) {
      return;
    }

    (async () => {
      setIsLoad(true);
      const { data } = await api.get(`movies/trending?page=${trendingPage}`);
      trending.push(...data);
      await Promise.all(
        data.map(async item => {
          const info = await apiTMDB.get(
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
      setIsLoad(false);
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

  const renderFooter = () => {
    if (isLoad === false) {
      return <ViewLoad />;
    }
    return (
      <ViewLoad>
        <IconLoad />
      </ViewLoad>
    );
  };

  const renderHeader = () => (
    <HeaderView>
      <HeaderText>Top Trending</HeaderText>
    </HeaderView>
  );

  return (
    <>
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
            ListHeaderComponent={() => renderHeader()}
            ListFooterComponent={() => renderFooter()}
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
