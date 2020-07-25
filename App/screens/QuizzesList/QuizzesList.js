import React from 'react'
import { ScrollView, Button } from 'react-native'

import data from '../../data'

import { RowItem } from '../../components/common'

import styles from './styles'

const QuizIndex = ({ navigation }) => {
  return (
    <ScrollView>
      {data?.map((quiz, idx) => (
        <RowItem
          key={`${quiz.title}-${idx}`}
          name={quiz.title}
          color={quiz.bgColor}
          onPress={() =>
            navigation.navigate(`Quiz-${quiz.title}`, {
              questions: quiz.questions,
              bgColor: quiz.bgColor,
            })
          }
        />
      ))}
    </ScrollView>
  )
}

export default QuizIndex
