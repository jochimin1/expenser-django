

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const mis_tc = [
    {
        tcNombre: "VISA MULTIMONEDA",
        fechaCorte: "02 de cada mes",
        fechaLimitePago: "24 de cada mes",
        limiteCreditoPesos: "44,000.00",
        limiteCreditoDolar:"0",
    },
    {
        tcNombre: "BHD",
        fechaCorte: "12 de cada mes",
        fechaLimitePago: "06 del proximo",
        limiteCreditoPesos: "37,000.00",
        limiteCreditoDolar:"600",
    },
    {
        tcNombre: "BSC Bravo",
        fechaCorte: "08 de cada mes",
        fechaLimitePago: "04 del proximo",
        limiteCreditoPesos: "50,000.00",
        limiteCreditoDolar:"500",
    },
]

export default function InfoTc() {
    return (
        <Table>
            <TableCaption>Informacion de mis TC.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Producto</TableHead>
                    <TableHead className="w-[100px]">Fecha Corte</TableHead>
                    <TableHead className="w-[150px]">Fecha Limite De Pago</TableHead>
                    <TableHead className="w-[100px]">Limite de Credito RD$</TableHead>
                    <TableHead className="w-[100px]">Limite de Credito US$</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {mis_tc.map((tcNombre) => (
                    <TableRow key={tcNombre.tcNombre}>
                        <TableCell className="font-medium">{tcNombre.tcNombre}</TableCell>
                        <TableCell>{tcNombre.fechaCorte}</TableCell>
                        <TableCell>{tcNombre.fechaLimitePago}</TableCell>
                        <TableCell>{tcNombre.limiteCreditoPesos}</TableCell>
                        <TableCell>{tcNombre.limiteCreditoDolar}</TableCell>
                        {/* <TableCell className="text-right">{tcNombre.fechaLimitePago}</TableCell> */}
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    {/* <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell> */}
                </TableRow>
            </TableFooter>
        </Table>
    )
}
