/*
 * Plans: think best to make it simple, theme aint' simple tho.
 * Step:
 *   1. Setup the structure, file and what need to be done for the POMODORO itslef. almost done
 *   3. Setup the timer, and the logic -- sorta work
 *
 *   2. Setup the theme, daisy ui, see how much we can push this theme
 *   4. Setup the sound, interagte icosn and routeing, between setting and timer ?
 *   5. Testing?
 *   6. Deploy, debatable
 */

import { Header } from '@/components/header/'
import { PomodoroContextProvider } from '@/components/provider/PomodoroContextProvider'
import { MainScreen, LapseCounter, Timer, ControlButtons, OptionsBar } from '@/components/home/'
import { Todos } from '@/components/tasks'

export default function Home() {
  return (
    <>
      {/* Pomodoro Context Provider */}
      <PomodoroContextProvider>
        {/* Navbar */}
        <Header />

        {/* Body */}
        <MainScreen>
          <OptionsBar />
          <Timer />
          <ControlButtons />
          <LapseCounter />
        </MainScreen>
        <Todos />
      </PomodoroContextProvider>
    </>
  )
}
