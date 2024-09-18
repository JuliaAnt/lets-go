import { TransportType } from '../utils/consts'

export const setTransportType = (transportTypes: TransportType[], transport: TransportType) => {
  const transportIndex = transportTypes.findIndex((transportType) => transportType === transport)
  let selectedTransport = []
  if (transportIndex === -1) {
    selectedTransport = [...transportTypes, transport]
  } else {
    selectedTransport = transportTypes.filter((transportType) => transportType !== transport)
  }
  return selectedTransport
}
