import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk('GREETING/FETCHRANDOM', async () => {
  const response = await fetch('http://127.0.0.1:3000');
  const ApiData = await response.json();
  return ApiData.greeting;
});

export default fetchData;
