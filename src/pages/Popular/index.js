import React, { useEffect, useState, useCallback } from 'react';

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
import Filter from '../Components/Filter';

const Popular = () => {
  const dispatch = useDispatch();
  const { popular, popularPage, filters, popularFilter } = useSelector(
    state => state,
  );
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (popular.length === 0) {
      loadRepositories();
    }
  }, [loadRepositories, popularFilter]);

  const loadRepositories = useCallback(async () => {
    if (isLoad) {
      return;
    }
    setIsLoad(true);
    (async () => {
      const { data } = await api.get(`movies/popular?page=${popularPage}
      ${popularFilter !== null ? `&genres=${popularFilter}` : ''}`);
      popular.push(...data);
      await Promise.all(
        data.map(async item => {
          const info = await apiTMDB.get(
            `${item.ids.tmdb}?api_key=f98a0ebf05f1ea85544a78f3bc54fde2`,
          );
          item.movieInfo = {
            resume: info.data.overview,
            title: info.data.original_title,
            poster: info.data.poster_path,
            status: info.data.status,
          };
        }),
      );
      dispatch({
        type: 'SET_POPULAR',
        payload: popular,
        page: popularPage + 1,
      });
    })();
    setIsLoad(false);
  }, [dispatch, isLoad, popular, popularPage]);

  const filterChange = async filter => {
    dispatch({
      type: 'SET_POUPULAR_FILTER',
      payload: filter,
      page: 1,
    });
  };

  const renderItem = ({ item, index }) => <Card index={index} item={item} />;

  const renderHeader = () => (
    <HeaderView>
      <HeaderText>Popular Movies</HeaderText>
    </HeaderView>
  );

  const renderFooter = () => {
    if (isLoad) {
      <ViewLoad />;
    }
    return (
      <ViewLoad>
        <IconLoad />
      </ViewLoad>
    );
  };

  return (
    <>
      <Filter
        options={filters}
        setFilter={filterChange}
        filter={popularFilter}
      />
      <SafeAreaView>
        {popular !== null && (
          <FlatList
            initialNumToRender={10}
            data={popular}
            renderItem={renderItem}
            keyExtractor={item =>
              `${item.ids.imdb}${Math.random().toString(36).substring(7)}`
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

export default Popular;
