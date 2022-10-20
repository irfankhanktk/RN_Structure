import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../config/colors'
import { mvs } from '../../../config/metrices'
import Regular from '../../../typography/regular-text'
type props = {
    onPress: () => void
    title: string
}
export const PlusButton = (props: props) => {
    const {
        onPress,
        title,
    } = props;
    return (
        <TouchableOpacity style={styles.plusContainer} onPress={onPress}>
            <Regular style={styles.plusText} label={title}/>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    plusContainer:{
       position:'absolute',
       bottom:mvs(40),
       ...colors.shadow,
       right:mvs(20),
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:colors.primary,
       width:mvs(50),
       height:mvs(50),
       borderRadius:mvs(50/2),
    },
    plusText:{
        color:colors.white,
    }
})