import { ChangeEvent, MouseEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardWriteProps {
    isEdit?: boolean
    data?: any
}

export interface IBoardWriteUIProps {
    onClickAddressSearch: (data: any) => void
    onCompleteAddressSearch: (data: any) => void
    onClickSubmit: () => void;
    onClickUpdate: () => void;
    isActive: boolean;
    isOpen: boolean;
    isEdit?: boolean;
    zipcode: string;
}



export interface ISubmitButtonProps {
    isActive: boolean;
}