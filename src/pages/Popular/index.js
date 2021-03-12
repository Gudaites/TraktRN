import React, { useEffect, useState, useCallback } from 'react';

// React Redux
import { useSelector, useDispatch } from 'react-redux';

import { api, apiFanart } from '../../services/api';
import { SafeAreaView, FlatList, ViewLoad, IconLoad } from './styles';
import Card from '../Components/Card';

const Popular = () => {
  const dispatch = useDispatch();
  const { popular, popularPage } = useSelector(state => state);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (popular.length === 0) {
      loadRepositories();
    }
  }, [loadRepositories]);

  const loadRepositories = useCallback(async () => {
    if (isLoad) {
      return;
    }
    setIsLoad(true);
    (async () => {
      const { data } = await api.get(`movies/popular?page=${popularPage}`);
      popular.push(...data);
      await Promise.all(
        data.map(async item => {
          try {
            const infos = await apiFanart.get(
              `${item.ids.tmdb}?api_key=023cb0942e00e8768646256b062d29d6`,
            );
            item.movieposter = infos.data.movieposter
              ? infos.data.movieposter[0]
              : null;
          } catch (e) {
          }
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

  const renderItem = ({ item, index }) => <Card index={index} item={item} />;

  const renderFooter = () => {
    if (isLoad) {
      return null;
    }
    return (
      <ViewLoad>
        <IconLoad />
      </ViewLoad>
    );
  };

  return (
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
          ListFooterComponent={() => renderFooter()}
          // Performance
          removeClippedSubviews
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={100}
          windowSize={7}
        />
      )}
    </SafeAreaView>
  );
};

export default Popular;
