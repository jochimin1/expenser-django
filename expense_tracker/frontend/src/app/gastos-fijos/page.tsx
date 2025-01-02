import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,

} from '@/components/ui/table'

// Datos de ejemplo para los gastos fijos
const gastosFijos = [
    {
        concepto: 'Electricidad',
        precios: [100, 95, 105, 110, 115, 120, 125, 130, 125, 120, 110, 105]
    },
    {
        concepto: 'Gas',
        precios: [50, 45, 40, 35, 30, 25, 20, 25, 30, 35, 40, 45]
    },
    {
        concepto: 'Altice Hogar',
        precios: [100, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
    },
    {
        concepto: 'Altice Movil',
        precios: [123, 340, 760, 260, 960, 340, 660, 760, 360, 60, 60, 60]
    },
    {
        concepto: 'Garaje',
        precios: [123, 340, 760, 260, 960, 340, 660, 760, 360, 60, 60, 60]
    },
    {
        concepto: 'Prestamo Bici',
        precios: [123, 340, 760, 260, 960, 340, 660, 760, 360, 60, 60, 60]
    },
    {
        concepto: 'Mami',
        precios: [123, 340, 760, 260, 960, 340, 660, 760, 360, 60, 60, 60]
    },
]

// Nombres de los meses para la tabla
const meses = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
]

// Calcular el total por cada mes
const calcularTotalesPorMes = (gastos) => {
    return meses.map((_, index) =>
        gastos.reduce((suma, gasto) => suma + gasto.precios[index], 0)
    )
}

// Página de gastos fijos para el año 2025
export default function GastosFijosPage() {
    const totalesPorMes = calcularTotalesPorMes(gastosFijos)

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Gastos Fijos 2025</h1>
            <div className="rounded-md border">
                <Table>
                    <TableCaption>Gastos fijos mensuales para el año 2025</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Concepto</TableHead>
                            {meses.map((mes) => (
                                <TableHead key={mes} className="text-right">{mes}</TableHead>
                            ))}
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {gastosFijos.map((gasto) => (
                            <TableRow key={gasto.concepto}>
                                <TableCell className="font-medium">{gasto.concepto}</TableCell>
                                {gasto.precios.map((precio, index) => (
                                    <TableCell key={index} className="text-right">${precio}</TableCell>
                                ))}
                                {/* Total por categoría */}
                                <TableCell className="text-right font-bold">
                                    ${gasto.precios.reduce((a, b) => a + b, 0)}
                                </TableCell>
                            </TableRow>
                        ))}
                        {/* Fila de totales por mes */}
                        <TableRow>
                            <TableCell className="font-bold">Total</TableCell>
                            {totalesPorMes.map((total, index) => (
                                <TableCell key={index} className="text-right font-bold">${total}</TableCell>
                            ))}
                            {/* Total general */}
                            <TableCell className="text-right font-bold">
                                ${totalesPorMes.reduce((a, b) => a + b, 0)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
