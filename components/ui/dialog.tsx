"use client";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";
import { X } from "lucide-react"; 

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({ className, ...props}, ref) => (
    <DialogPrimitive.Overlay {...props} ref={ref} className={cn("fixed inset-0", className)}/>
))

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({ className, children, ...props}, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content ref={ref} {...props}>
            {children}
        </DialogPrimitive.Content>
        <DialogPrimitive.Close className="absolute top-5 right-5">
            <X className="w-4 h-4"/>
        </DialogPrimitive.Close>
    </DialogPortal>
))

DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} className={cn("flex flex-col space-y-1", className)} />
)


const DialogTitle = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({ className, ...props}, ref) => (
    <DialogPrimitive.Title ref={ref} {...props} className={cn("", className)}/>
))

DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({ className, ...props}, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn("", className)} {...props} />
))

DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogPortal,
    DialogDescription,
    DialogClose
}