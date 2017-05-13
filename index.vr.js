import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model
} from 'react-vr';

export default class rbaReact extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('test3.jpg')}/>
        <Text
          style={{
            color: "black",
            fontSize: 0.5,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
          }}>
          Hello World!
        </Text>

        <Model
            style={{
                transform: [
                    {translate: [0, -10, -50]},
                    {scale: 0.15 },
                    {rotateY: 0},
                    {rotateX: 0},
                    {rotateZ: 0}
                ]
            }}

            source={{
                obj: asset('cherryTree.obj'),
                mtl: asset('cherryTree.mtl')
            }}
        />

        <Model
            style={{
                transform: [
                    {translate: [0, -70, -30]},
                    {scale: 1 },
                    {rotateY: 0},
                    {rotateX: 0},
                    {rotateZ: 0}
                ]
            }}

            source={{
                obj: asset('cherryTree.obj'),
                mtl: asset('cherryTree.mtl')
            }}
        />

        <Model
            style={{
                transform: [
                    {translate: [50, -50, -460]},
                    {scale: 1 },
                    {rotateY: 0},
                    {rotateX: 0},
                    {rotateZ: 0}
                ]
            }}

            source={{
                obj: asset('cherryTree.obj'),
                mtl: asset('cherryTree.mtl')
            }}
        />


        <Model
            style={{
                transform: [
                    {translate: [0, -70, -30]},
                    {scale: 10},
                    {rotateY: 0},
                    {rotateX: 0},
                    {rotateZ: 0}
                ]
            }}

            source={{
                obj: asset('baseplate.obj'),
                mtl: asset('baseplate.mtl')
            }}
        />

        <Model
            style={{
                transform: [
                    {translate: [50, -50, -340]},
                    {scale: 1},
                    {rotateY: 80},
                    {rotateX: 0},
                    {rotateZ: 0}
                ]
            }}

            source={{
                obj: asset('building.obj'),
                mtl: asset('building.mtl')
            }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('rbaReact', () => rbaReact);
