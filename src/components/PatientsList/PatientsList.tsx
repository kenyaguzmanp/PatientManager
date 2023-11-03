import React, { FC } from 'react';
import { View, FlatList } from 'react-native';
import { Patient } from '../../types/patient/intex';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';
import styles from './styles';

interface PatientsListProps {
  patients: Patient[];
}

export const PatientsList: FC<PatientsListProps> = ({ patients }: PatientsListProps) => {
  const renderItem = ({ item }: { item: Patient }) => {
    return (
      <View style={styles.cardContainer}>
        <Card
          id={item?.id}
          key={item?.id}
          title={item?.name}
          description={item?.description}
          cover={item?.avatar}
        />
      </View>
    );
  };

  if (patients && patients.length > 0) {
    return (
      <View style={styles.container}>
        <FlatList
          data={patients}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item?.id}-${index}`}
          initialNumToRender={10}
        />
      </View>
    );
  }
  return <Spinner />;
};
