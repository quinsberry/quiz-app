import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import data from '../data'

import Quiz from './Quiz/Quiz'
import QuizzesList from './QuizzesList/QuizzesList'

const Stack = createStackNavigator()

const QuizRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuizzesList">
        <Stack.Screen name="QuizzesList" options={{ title: 'Quizzes' }} component={QuizzesList} />
        {data?.map((quiz, idx) => (
          <Stack.Screen
            key={`Quiz-${quiz.title}__${idx}`}
            name={`Quiz-${quiz.title}`}
            options={{
              title: quiz.title,
              headerStyle: {
                backgroundColor: quiz.bgColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            component={Quiz}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default QuizRouter
