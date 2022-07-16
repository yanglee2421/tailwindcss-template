import data from "./mod.js"
try {
    const arr = data.ProcessNodeNotifyInfoList
    const test1 = arr.some((item, index) => {
        let res = false
        if (item.WarningNum > 1) {
            item.WarningTime === 0 && (res = true)
        }
        return res
    })
    if (test1) throw "次数大于1时，时间不能为0"
    const test2 = arr.every((item, index) => {
        return item.UserList.length || item.NotifyCarrier || item.NotifyDriver
    })
    if (!test2) throw "必须选择一个接收人"
    const test3 = arr.every((item, index) => {
        const res1 = item.UserList.length && (item.UserMesInStation || item.UserPublicAccount)
        const res2 = item.NotifyCarrier && (item.CarrierMesInStation || item.CarrierPublicAccount)
        const res3 = item.NotifyDriver && (item.DriverTextMessage || item.DriverPublicAccount)
        return res1 || res2 || res3
    })
    if (!test3) throw "接收人必须选择一种收信方式"
} catch (err) {
    console.log(err)
}
