import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import 'dotenv/config'

// require('dotenv').config()
//dotenv.config();

export const client = createClient({
    projectId: 'kwtvx3fj',
    dataset: 'production',
    apiVersion: '2023-07-10',
    useCdn: false,
    token: 'skXqezti3f6l3RYAOVU6u5z62eJRJrYgkGh5mg22YUKhbAv2Q5w1L6aOJX8hvoEwiLsVTfiXeL4ZyFNbbbI9xzJeo1FXdx6tLHscNXSMlJYIUEXglVqqWLycRxNayXF9WzmOTXjVnkLPvOKqFkoDkihsHKd4kTZhgUmo5jxAiAlrijCNLMIh',
  });
  
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
