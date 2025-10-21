"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoIframe } from "@/components/ui/video-iframe";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Header86() {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <Card className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h1 className="heading-h1 mb-5 font-bold md:mb-6">
              Transforme sua papelaria em um negócio lucrativo
            </h1>
            <p className="text-medium">
              Produtos estratégicos que garantem giro rápido e margens
              expressivas. Importação direta para lojistas que querem resultados
              concretos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Catálogo">Catálogo</Button>
              <Button title="Contato" variant="secondary">
                Contato
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Dialog>
              <DialogTrigger className="relative flex size-full items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                  alt="Relume placeholder image"
                  className="size-full rounded-r-card object-cover"
                />
                <span className="absolute inset-0 z-10 bg-neutral-darkest/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      </div>
    </section>
  );
}
