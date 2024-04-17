import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  // baseURL: 'http://hybrid.srishticampus.in/job_portal_api/', 

//local api

  baseURL: 'http://localhost:4022/job_portal_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance