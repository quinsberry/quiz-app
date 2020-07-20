import React from 'react'
import { View, StatusBar, Text, SafeAreaView } from 'react-native'

import { Button, ButtonContainer, Alert } from '../../components/common'

import styles from './styles'

import { computers } from '../../data'

const Quiz = () => {
  const [state, setState] = React.useState({
    correctCount: 0,
    totalCount: computers.length,
  })
  const [activeQuestionIdx, setActiveQuestionIdx] = React.useState(0)
  const [answerCorrect, setAnswerCorrect] = React.useState(false)
  const [answered, setAnswered] = React.useState(false)

  const nextQuestion = () => {
    const nextIdx = activeQuestionIdx + 1

    if (nextIdx === state.totalCount) {
      setActiveQuestionIdx(0)
      setAnswered(false)
      return
    }
    setActiveQuestionIdx(nextIdx)
    setAnswered(false)
  }

  const handleAnswer = (correct) => {
    setAnswered(true)
    if (correct) {
      setState({
        ...state,
        correctCount: state.correctCount + 1,
      })
      setAnswerCorrect(true)
    } else {
      setAnswerCorrect(false)
    }
    setTimeout(() => {
      nextQuestion()
    }, 750)
  }

  const question = computers[activeQuestionIdx]
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View>
          <Text style={styles.text}>{question.question}</Text>
          <ButtonContainer>
            {question.answers.map((answer) => (
              <Button
                key={answer.id}
                text={answer.text}
                onPress={() => handleAnswer(answer.correct)}
              />
            ))}
          </ButtonContainer>
        </View>
        <Text style={styles.text}>{`${state.correctCount}/${state.totalCount}`}</Text>
      </SafeAreaView>
      {answered && <Alert correct={answerCorrect} />}
    </View>
  )
}

export default Quiz
