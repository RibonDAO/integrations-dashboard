import ModalBlank, {
  Props as ModalBlankProps,
} from "components/moleculars/modals/ModalBlank";
import ModalImage, {
  Props as ModalImageProps,
} from "components/moleculars/modals/ModalImage";

/* eslint-disable no-shadow, no-unused-vars */
export enum MODAL_TYPES {
  MODAL_BLANK = "MODAL_BLANK",
  MODAL_IMAGE = "MODAL_IMAGE",
}
/* eslint-enable no-shadow, no-unused-vars */

export const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.MODAL_BLANK]: ModalBlank,
  [MODAL_TYPES.MODAL_IMAGE]: ModalImage,
};
export type ShowModalProps =
  | {
      type: MODAL_TYPES.MODAL_BLANK;
      props: ModalBlankProps;
    }
  | {
      type: MODAL_TYPES.MODAL_IMAGE;
      props: ModalImageProps;
    };
