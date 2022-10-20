import { reactive } from "vue";
interface _gallerySta {
  isShow: boolean;
  urlList: string[];
}
export default () => {
  const gallerySta = reactive<_gallerySta>({
    isShow: false,
    urlList: [],
  });
  return gallerySta;
};
