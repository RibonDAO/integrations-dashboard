import ModalBlank, {
  Props as ModalBlankProps,
} from "components/moleculars/modals/ModalBlank";
import ModalIcon, {
  Props as ModalIconProps,
} from "components/moleculars/modals/ModalIcon";
import ModalImage, {
  Props as ModalImageProps,
} from "components/moleculars/modals/ModalImage";

/* eslint-disable no-shadow, no-unused-vars */
export enum MODAL_TYPES {
  MODAL_BLANK = "MODAL_BLANK",
  MODAL_ICON = "MODAL_ICON",
  MODAL_IMAGE = "MODAL_IMAGE",
}
/* eslint-enable no-shadow, no-unused-vars */

export const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.MODAL_BLANK]: ModalBlank,
  [MODAL_TYPES.MODAL_ICON]: ModalIcon,
  [MODAL_TYPES.MODAL_IMAGE]: ModalImage,
};
export type ShowModalProps =
  | {
      type: MODAL_TYPES.MODAL_BLANK;
      props: ModalBlankProps;
    }
  | {
      type: MODAL_TYPES.MODAL_ICON;
      props: ModalIconProps;
    }
  | {
      type: MODAL_TYPES.MODAL_IMAGE;
      props: ModalImageProps;
    };
