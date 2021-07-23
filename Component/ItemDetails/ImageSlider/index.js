import React, {useState, useEffect} from 'react'
import { Dimensions } from 'react-native'
import { View, Text, Image } from 'react-native'
import { ScrollView, FlatList } from 'react-native'
import ImageChild from '../ImageChild'
import FlatListSlider from '../FlatListSlider'
import adds from '../../HomeScreen/AddList/adds'

const ImageSlider = ({images}) => {

    const [banners, setBanners] = useState([])

    useEffect(() => {
    })

    return(
        <View>
 
            <FlatListSlider 
            data={images}
            timer={2000}
            imageKey={'image'}
            autoScroll={false}
            width={Math.round(Dimensions.get('window').width)}
            local={true}
            />
        </View>
    )
}

export default ImageSlider