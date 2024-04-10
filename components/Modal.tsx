import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ModalProps {
    isOpen:boolean;
    onClose:()=>void;
    title:string;
    className?:string;
    children?:React.ReactNode;
    handleClick?:()=>void;
    buttonText?:string;
    image?:string;
    buttonIcon?:string;
    description?:string;

}
const Modal = ({title,className,children,handleClick,buttonText,image,buttonIcon,description}:ModalProps) => {
    return (
        <Dialog >
          <DialogTrigger asChild>
            <Button variant="primary">{buttonText ?buttonText: 'modal'} </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{title ? title: 'modal title'}</DialogTitle>
              <DialogDescription>
                {description}
              </DialogDescription>
            </DialogHeader>
            
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
}

export default Modal
