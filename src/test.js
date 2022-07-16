import data from "./mod.js"
function fun() {
    try {
        const arr = data.ProcessNodeNotifyInfoList
        arr.forEach((item, index) => {
            // 1
            let rule1 = true
            if (item.WarningNum > 1) {
                item.WarningTime === 0 && (rule1 = false)
            }
            if (!rule1) throw { message: "次数大于1时，时间不能为0", index }
            // 2
            let rule2 = item.UserList.length || item.NotifyCarrier || item.NotifyDriver
            if (!rule2) throw { message: "必须选择一个接收人", index }
            // 3
            const res1 = item.UserList.length && (item.UserMesInStation || item.UserPublicAccount)
            const res2 = item.NotifyCarrier && (item.CarrierMesInStation || item.CarrierPublicAccount)
            const res3 = item.NotifyDriver && (item.DriverTextMessage || item.DriverPublicAccount)
            let rule3 = res1 || res2 || res3
            if (!rule3) throw { message: "接收人必须选择一种收信方式", index }
        })
    } catch ({ message, index }) {
        console.log(message, `第${index + 1}行`)
        return
    }
    console.log("发请求")
}
fun()