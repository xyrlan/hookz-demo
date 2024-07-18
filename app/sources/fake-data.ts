export const columns = [
  { key: "dataSource", label: "Fonte de Dados" },
  { key: "tags", label: "Tags" },
  { key: "type", label: "Tipo" },
  { key: "batchSource", label: "Fonte de Lote" },
  { key: "streamSource", label: "Fonte de Fluxo" },
  { key: "featureViews", label: "Visualizações de Funcionalidades" },
  { key: "featureServices", label: "Serviços de Funcionalidades" },
  { key: "lastUpdatedBy", label: "Última Atualização Por" },
  { key: "lastUpdated", label: "Última Atualização" },
  { key: "owner", label: "Proprietário" },
  { key: "created", label: "Criado" }
];

export const rows = [
  {
    key: "1",
    dataSource: "transactions_batch",
    slug: "transactions_batch",
    title: "Metadata",
    tags: "0",
    type: "Batch",
    batchSource: "File",
    streamSource: "n/a",
    featureViews: "1",
    featureServices: "2",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  },
  {
    key: "2",
    dataSource: "transactions_stream",
    slug: "transactions_stream",
    title: "Metadata",
    tags: "0",
    type: "Stream",
    batchSource: "File",
    streamSource: "Push",
    featureViews: "1",
    featureServices: "2",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  },
  {
    key: "3",
    dataSource: "users",
    slug: "users",
    title: "Metadata",
    tags: "0",
    type: "Batch",
    batchSource: "File",
    streamSource: "n/a",
    featureViews: "1",
    featureServices: "1",
    lastUpdatedBy: "mahesh@tecton.ai",
    lastUpdated: "2024-04-01 22:30",
    owner: "n/a",
    created: "2024-04-01 22:30"
  }
];

export const fileConfig = {
  title: "Configuração do Arquivo",
  URI: "https://www.w3schools.com/images/w3schools_green.jpg",
  file_format: "FILE_DATA_SOURCE_FORMAT_PARQUET",
  timestamp_field: "timestamp",
  timestamp_format: "TIMESTAMP_FORMAT_ISO_8601",
  post_processor: "POST_PROCESSOR_NONE",
  data_delay: "DATA_DELAY_NONE",
}

export const data = [
  {
    title: "Configuração do Arquivo",
    URI: "https://www.w3schools.com/images/w3schools_green.jpg",
    file_format: "FILE_DATA_SOURCE_FORMAT_PARQUET",
    timestamp_field: "timestamp",
    timestamp_format: "TIMESTAMP_FORMAT_ISO_8601",
    post_processor: "POST_PROCESSOR_NONE",
    data_delay: "DATA_DELAY_NONE",
  },
]