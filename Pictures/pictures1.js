import { useNavigation } from "@react-navigation/native"
import { Button, Image, Pressable, Text, View } from "react-native"

const Screen1 = ({ route }) => {
    const navigation = useNavigation();
    const data = route.params;

    return <View style={{ width: '100%', gap: 15, padding: 15 }}>
        <View style={{ height: 300 }}>
          {/* tạo ảnh mặc đinh */}
            <Image resizeMode="contain" source={require(`../image/${data?.image ? data.image : 'vs_blue.png'}`)} style={{ width: null, height: 300 }} />
        </View>
        <View>
          {/* tạo chữ  */}
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        {/* tạo hình ngôi sao */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                {Array(5).fill(0).map(item => {
                    return <Image source={require('../image/star.png')} style={{ width: 25, height: 25 }} />
                })}
            </View>
                {/* tạo chữ đánh giá  */}
            <Text style={{ fontSize: 14, fontWeight: 600 }}>(Xem 828 đánh giá)</Text>
        </View>
            {/* tạo giá tiền */}
        <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 600 }}>1.790.000 đ</Text>
            <Text style={{ fontSize: 18, color: 'grey', textDecorationLine: 'line-through' }}>1.790.000 đ</Text>
        </View>
            {/* tạo chữ ở đâu rẻ hơn hoàn tiền */}
        <View>
            <Text style={{ textTransform: 'uppercase', color: 'red', fontWeight: 600 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>
            {/* tạo dấu chấm hỏi */}
            <View style={{
                borderWidth: 1,
                borderRadius: 45,
                height: 20,
                width: 20,
                top: -33,
                left: 187,}}>
                    <Text style={{ textAlign: 'center',width:'100%' }}>?</Text>
                    </View>
                    {/* tạo nút nhấn 4 màu-chọn màu */}
        <View style={{ marginTop: 10 }}>
            <Pressable onPress={() => { navigation.navigate('Detail') }} style={{ paddingVertical: 15, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 50 }}>
                <Text style={{ textTransform: 'uppercase', fontSize: 18, textAlign: 'center' }}>
                    4 Màu-chọn màu
                </Text>
            </Pressable>
        </View>
              {/* tạo nút chọn mua */}
        <View style={{ marginTop: 10 }}>
            <Pressable >
        <Button style={{ textAlign: 'center' ,textTransform: 'uppercase',backgroundColor: 'red', paddingVertical: 15, width: '100%',fontSize: 18, borderWidth: 1, borderColor: 'gray', borderRadius: 10 }} title="chọn mua" color="red" onPress={() => alert('xác nhận mua đơn hàng')}/>
            </Pressable>
        </View>
    </View>
}

export default Screen1;
