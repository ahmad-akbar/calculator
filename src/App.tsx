import * as React from 'react';
import './App.css';
import { Button, Checkbox, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    input1: '',
    input2: '',
    input3: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    result: '0',
    showError: false
  })

  const handleInput = (value: string, input: string) => {
    input === 'input1' ?
      setState({
        ...state, input1: value
      })
      : input === 'input2' ?
        setState({
          ...state, input2: value
        })
        : setState({
          ...state, input3: value
        })
  }

  const handleCheck = (checkBox: string) => {
    checkBox === '1' ?
      setState({
        ...state, checkbox1: !state.checkbox1
      })
      : checkBox === '2' ?
        setState({
          ...state, checkbox2: !state.checkbox2
        })
        : setState({
          ...state, checkbox3: !state.checkbox3
        })
  }

  let angka1 = state.checkbox1 ? state.input1 : ''
  let angka2 = state.checkbox2 ? state.input2 : ''
  let angka3 = state.checkbox3 ? state.input3 : ''
  let arrAngka = [+angka1, +angka2, +angka3]
  let hasil: (number) = 0
  let zeroCounter: (number) = 0

  const handlePlus = () => {
    arrAngka.forEach(x => {
      if (x !== 0) {
        hasil += x
      }
      else {
        zeroCounter++
      }
    })

    setState({
      ...state,
      result: zeroCounter > 1 ? '0' : `${hasil}`,
      showError: zeroCounter > 1 ? true : false
    })
  }

  const handleMinus = () => {
    arrAngka.map(x => {
      if (x !== 0) {
        hasil === 0 ? hasil = x : hasil -= x
      } else {
        zeroCounter++
      }
    })

    setState({
      ...state,
      result: zeroCounter > 1 ? '0' : `${hasil}`,
      showError: zeroCounter > 1 ? true : false
    })
  }

  const handleTimes = () => {
    arrAngka.map(x => {
      if (x !== 0) {
        hasil === 0 ? hasil = x : hasil *= x
      }
      else {
        zeroCounter++
      }
    })

    setState({
      ...state,
      result: zeroCounter > 1 ? '0' : `${hasil}`,
      showError: zeroCounter > 1 ? true : false
    })
  }

  const handleDevided = () => {
    arrAngka.map(x => {
      if (x !== 0) {
        hasil === 0 ? hasil = x : hasil /= x
      }
      else {
        zeroCounter++
      }
    })

    setState({
      ...state,
      result: zeroCounter > 1 ? '0' : `${hasil}`,
      showError: zeroCounter > 1 ? true : false
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h4'> Technical Test Aruna - Calculator </Typography>
      </header>
      {state.showError &&
        <div>
          <Typography variant='h6' color={'red'}> Checked input must be more than one </Typography>
        </div>}
      <div>
        <Stack
          direction={'row'}
          spacing={4}
          justifyContent={"center"}
          alignItems={"center"}
          margin={3}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={'column'}
            spacing={3}
          >
            <TextField
              label="Input Angka 1"
              onChange={e => handleInput(e.target.value, 'input1')}
              value={state.input1}
              variant="outlined"
              size="small"
              inputProps={{ inputMode: 'numeric', type: 'number' }}
            />

            <TextField
              label="Input Angka 2"
              onChange={e => handleInput(e.target.value, 'input2')}
              value={state.input2}
              variant="outlined"
              size="small"
              inputProps={{ inputMode: 'numeric', type: 'number' }}
            />
            <TextField
              label="Input Angka 3"
              onChange={e => handleInput(e.target.value, 'input3')}
              value={state.input3}
              variant="outlined"
              size="small"
              inputProps={{ inputMode: 'numeric', type: 'number' }}
            />
          </Stack>

          <Stack
            direction={'column'}
            spacing={2}
            justifyContent={'end'}
            alignItems={'flex-end'}
          >
            <Checkbox
              onChange={() => handleCheck('1')}
              checked={state.checkbox1}
              inputProps={{ 'aria-label': 'Checkbox demo' }}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
            <Checkbox
              onChange={() => handleCheck('2')}
              checked={state.checkbox2}
              inputProps={{ 'aria-label': 'Checkbox demo' }}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
            <Checkbox
              onChange={() => handleCheck('3')}
              checked={state.checkbox3}
              inputProps={{ 'aria-label': 'Checkbox demo' }}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
          </Stack>
        </Stack>

        <Stack
          direction={'row'}
          spacing={1}
          justifyContent={"center"}
          marginBottom={'20px'}
        >
          <Button variant="outlined" onClick={() => handlePlus()}>+</Button>
          <Button variant="outlined" onClick={() => handleMinus()}>-</Button>
          <Button variant="outlined" onClick={() => handleTimes()}>X</Button>
          <Button variant="outlined" onClick={() => handleDevided()}>/</Button>
        </Stack>

        <hr />

        <Stack
          direction={'row'}
          spacing={20}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant={'h6'}>Hasil : </Typography>
          <Typography variant={'h6'}>{state.result}</Typography>
        </Stack>

      </div>
    </div>
  );
}

export default App;
