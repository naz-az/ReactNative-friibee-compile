import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import Comment from './CommentBox/Comment';
import PostComment from './CommentBox/PostComment';
import Header from './CommentBox/Header';


export default function App() {
    return (
      <>
       <Header />
        <Comment />
        <PostComment />
        <StatusBar style="auto" />
      </>
    );
  }
