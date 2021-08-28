import React from 'react'
import { Spring } from '@react-spring/web'
import { Texture } from 'pixi.js'
import { Stage, Sprite } from '@inlet/react-pixi/animated'

export default function TestingGround() {
    
    return (
        <Stage>
        <Spring native from={{ x: 0, y: 0 }} to={{ x: 200, y: 200 }}>
          {props => <Sprite texture={Texture.WHITE} tint={0xff0000} {...props} />}
        </Spring>
      </Stage>
    )
}
