import React, { FC, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from '../../components/Card/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { enhancedRetrieveUsers } from '../../api/services';
import { noop } from 'lodash';
import { useSelector } from 'react-redux';
import { getPatients } from '../../store/selectors';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  useEffect(() => {
    const patientsPromise = async () => {
      await enhancedRetrieveUsers({
        onPreRequest: noop,
        onSuccess: noop,
        onError: noop,
        setLoadingState: noop,
      });
    };
    patientsPromise().catch((e) => console.log(e));
  }, []);
  const patients = useSelector(getPatients);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Home</Text>
          {patients &&
            patients.length > 0 &&
            patients.map((patient) => {
              return (
                <Card
                  key={patient?.id}
                  title={patient?.name}
                  description={patient?.description}
                  cover={patient?.avatar}
                />
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
