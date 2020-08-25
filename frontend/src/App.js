import React, {useState,useEffect} from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import Header from './layout/Header';



const App = () =>{
  const[blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:1337/entradas')
        .then(response => response.json())
        .then(data => setBlogPosts(data))
    }
  , [])
  
  return(
    <div >
      <GlobalStyles></GlobalStyles>
      <Header/>
    {blogPosts.map(post =>{
      return(
        <Wrap>
        <Card key={post.id}>
          <h2>{post.Title}</h2>
          <img src={'http://localhost:1337/'+ post.ImagenDestacada.url}/>
          <p>
          {post.Slug}
          </p>
          
           <button to={'/post/'+ post.id} >Ver más</button>
      
        </Card>
        </Wrap>
      )})}
    </div>
    )

    }
    const Wrap=styled.div`
      margin:10vw;
      display: flex;
    flex-flow:row wrap;
    width:100vw;
    height:100vh;`
    const Card = styled.div`
    align-items:center;
    font-family: 'Playfair Display', serif;
    display:flex;
    flex-flow: row wrap;
    max-width:800px;
    max-height:800px;
    padding:.1em;
    overflow:hidden;
    background-color:#ff8e91;
    border-radius:1em;
    color:white;
    justify-content:center;
    p{
      padding:1em;
    }
    h2{
      font-family: 'Libre Baskerville', serif;
      font-size:20px;
      
      padding:.5em;
    }
    img{
      width:90%;
      padding:1em;
    }
    button{
      background-color: #ce7e83;
      color: white;
      border:none;
      height:2em;
      -webkit-box-shadow: inset 0px .5em 0px 1px #a46468;
      -moz-box-shadow: inset 0px .5em 0px 1px #a46468;
      box-shadow: inset 0px .5em 0px 1px #a46468;

    }
    `
    const GlobalStyles = createGlobalStyle`html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }`

export default App;
