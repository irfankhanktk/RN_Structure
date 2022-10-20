import React from 'react'
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/colors'
import { mvs } from '../../../config/metrices'
import Regular from '../../../typography/regular-text'
type props = {
    onChangeText: (text:string) => void
    value: string,
    label: string,
    placeholder?: string,
    style?:StyleProp<ViewStyle>
}
export const PrimaryInput = (props: props) => {
    const {
        onChangeText,
        value,
        style,
        label,
        placeholder='type here'
    } = props;
    return (
        <View style={styles.Container}>
            <Regular label={label}/>
            <TextInput value={value} placeholder={placeholder} onChangeText={onChangeText} style={[styles.textInput,style]}/>
        </View>
    )
};


const styles = StyleSheet.create({
    Container:{
        borderRadius:mvs(50/2),
        borderBottomWidth:0.7,
        paddingVertical:mvs(7),
    },
    textInput:{
        color:colors.black,
        // paddingHorizontal:mvs(15),
        height:mvs(40),
    }
})