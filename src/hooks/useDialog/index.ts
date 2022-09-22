import { nextTick, reactive, watch } from "vue";
import type { FormInstance } from "element-plus";
interface _props {
  modelValue: Record<string, unknown> | boolean;
}
interface _formSta {
  ref?: FormInstance;
  model: Record<string, unknown>;
}
export default (props: _props, model: Record<string, unknown>) => {
  const dialogSta = reactive({
    isShow: false,
  });
  const formSta = reactive<_formSta>({
    ref: undefined,
    model,
  });
  watch(
    () => props.modelValue,
    (modelValue) => {
      switch (modelValue) {
        case false:
          dialogSta.isShow = false;
          break;
        case true:
          dialogSta.isShow = true;
          break;
        default:
          nextTick(() => {
            dialogSta.isShow = true;
          });
      }
    }
  );
  watch(
    () => dialogSta.isShow,
    (isShow) => {
      if (!isShow) {
        formSta.ref?.resetFields();
      }
    }
  );
  const submitFn = () => {
    formSta.ref?.validate((res) => {
      if (res) {
      } else {
        return false;
      }
    });
  };
};
