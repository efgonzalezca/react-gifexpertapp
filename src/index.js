import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import { GifExpertApp } from './GifExpertApp'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container);

root.render(<GifExpertApp />)

//GifExpertApp
//<h2>GifExpertApp<h2/>
//<hr/>