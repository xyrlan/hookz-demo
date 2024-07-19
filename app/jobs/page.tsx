"use client";
import { subtitle } from '@/components/primitives'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { data } from './fake-data'
import { Dot } from 'lucide-react';



const JobsPage = () => {
  const renderRowData = (label: string, value: string) => (
    <div key={label} className="flex justify-between">
      <label className="block text-sm font-semibold text-gray-800">{label}</label>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );
  return (
    <div>
      <div className='mb-10'>
        <h1 className={subtitle()}>Tarefas</h1>
      </div>

      <div className='rounded-xl'>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {
            data.map((config, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center font-medium bg-gray-200">
                  {config.title}
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col gap-4">
                  {Object.keys(config).map(key => key !== "title" && renderRowData(key.replace(/_/g, ' '), config[key as keyof typeof config]))}
                </CardBody>
              </Card>
            ))
          }
          <Card >
            <CardHeader className="flex flex-row items-center font-medium bg-gray-200">
              Configuração do cluster
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-4">
              <div className="flex justify-between">
                <label className="block text-sm font-semibold text-gray-800">Tipo de instância</label>
                <p className="text-sm text-gray-600">n/a</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className='my-10 '>
        <h2 className={subtitle()}>Estágios de tarefas</h2>
        <div className='flex flex-col gap-4'>
          <Card >
            <CardBody className="flex flex-row gap-4">
              <div className="flex flex-col justify-between w-full">
                <label className="block font-semibold text-gray-800 mb-2">Pyton</label>
                <p className="text-sm text-gray-600">Lendo Data Source</p>
              </div>
              <Divider orientation='vertical' className='h-14' />
              <div className="flex flex-col justify-between w-full">
                <label className="text-sm font-semibold text-gray-800 mb-2 flex gap-2"><Dot className='text-teal-500' /> Sucesso</label>
                <div
                  className="h-2 bg-teal-500 w-full"
                ></div>
              </div>
            </CardBody>
          </Card>
          <Card >
            <CardBody className="flex flex-row gap-4">
              <div className="flex flex-col justify-between w-full">
                <label className="block font-semibold text-gray-800 mb-2 ">Pyton</label>
                <p className="text-sm text-gray-600 ">Avaliando pipelines de visualização de recursos</p>
              </div>
              <Divider orientation='vertical' className='h-14' />
              <div className="flex flex-col justify-between w-full">
                <label className="text-sm font-semibold text-gray-800 mb-2 flex gap-2"><Dot className='text-teal-500' /> Sucesso</label>
                <div
                  className="h-2 bg-teal-500 w-full"
                ></div>
              </div>
            </CardBody>
          </Card>
          <Card >
            <CardBody className="flex flex-row gap-4">
              <div className="flex flex-col justify-between w-full">
                <label className="block font-semibold text-gray-800 mb-2 ">Agregações Hookz</label>
                <p className="text-sm text-gray-600 ">Computação de características agregadas e junção de resultados</p>
              </div>
              <Divider orientation='vertical' className='h-14' />
              <div className="flex flex-col justify-between w-full">
                <label className="text-sm font-semibold text-gray-800 mb-2 flex gap-2"><Dot className='text-teal-500' /> Sucesso</label>
                <div
                  className="h-2 bg-teal-500 w-full"
                ></div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default JobsPage