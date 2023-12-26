"use client";

import { useStoreModal } from "@/hooks/use-strore-modal";
import { Modal } from "@/components/ui/modal";


export const StoreModal = () =>{
    const storeModal = useStoreModal();
    
    return(
            <Modal
            title="Create a store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
            >
               {/* Este texto no se muestra*/ }
                Hplaaa
        
        
            </Modal>
        )
}