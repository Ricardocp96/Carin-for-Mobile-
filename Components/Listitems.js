
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  SectionList,
} from 'react-native';

export const Listitems = () => {
  /**
   * This is where we will render the channel label or row
   * @param {*} item
   */
  const renderChannelListItem = (item) => <Text>{item}</Text>;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextInput
            style={styles.inputSearchBox}
            placeholderTextColor="grey"
            placeholder="Jump to"
          />
        </View>

        <SectionList
          style={styles.sectionList}
          /** sections data is currently empty. We will populate it with respective channels of group */
          sections={[
            {
              title: 'Unread',
              data: [],
            },
            {
              title: 'Channels',
              data: [],
            },
            {
              title: 'Direct Messages',
              data: [],
            },
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, section}) => {
            return renderChannelListItem(item);
          }}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.groupTitleContainer}>
              <Text style={styles.groupTitle}>{title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },
  headerContainer: {
    padding: 10,
    marginRight: 10,
  },
  inputSearchBox: {
    backgroundColor: '#2e0a2f',
    padding: 10,
  },
  sectionList: {
    flexGrow: 1,
    flexShrink: 1,
  },
  groupTitleContainer: {
    padding: 10,
    borderBottomColor: '#995d9a',
    borderBottomWidth: 0.3,
    marginBottom: 7,
    backgroundColor: '#3F0E40',
  },
  groupTitle: {
    color: 'white',
    fontWeight: '100',
    fontSize: 12,
    fontFamily: 'Lato-Regular',
  },
});