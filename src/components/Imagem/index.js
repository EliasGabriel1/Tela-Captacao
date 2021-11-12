import React from 'react'
import caminho from "./coversao.png"

export default function Imagem() {
    return (
        <>
          <figure>
              <img src={caminho} width="100%" alt="imagem-captacao"/>
            </figure>  
        </>
    )
}
