'use client'

import React from 'react'
import { TipoServico } from './dadosServicos'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Package } from 'lucide-react'

interface ServicoProps {
  servico: TipoServico
}

export default function Servico({ servico }: ServicoProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const IconComponent = servico.icon || Package

  return (
    <>
      <div
        className="flex items-center px-2 py-8 border border-slate-200 rounded-lg hover:bg-white/50 cursor-pointer hover:shadow-md transition-all duration-200 group"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-16 h-16 px-4 flex items-center justify-center rounded-full bg-sky-100 group-hover:bg-sky-200 transition-colors duration-200 mr-4">
          <IconComponent size={32} className="text-sky-600 group-hover:text-sky-700 transition-colors duration-200" />
        </div>
        <h3 className="font-semibold text-md text-sky-900 group-hover:text-sky-700 transition-colors duration-200">{servico.name}</h3>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-sky-900 flex items-center justify-center gap-2">
              <IconComponent size={28} className="text-sky-600" />
              {servico.name}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="mt-4 max-h-[60vh] pr-4">
            <ul className="text-gray-700 space-y-3">
              {servico.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-sky-600 font-bold">•</span>
                  <p className="text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </ScrollArea>
          <div className="mt-6 flex justify-end">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
