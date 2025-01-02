// 'use client'

// import { useEffect, useState } from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from '@/components/ui/table'


// interface Gasto {
//     id: number
//     fecha: string
//     descripcion: string
//     monto: string
// }

// export default function TablaGastosPage() {

//     // estado para los gastos y el estado de carga y error de la petición
//     const [gastos, setGastos] = useState<Gasto[]>([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState<string | null>(null)

//     // cargar los gastos al montar el componente con useEffect y fetch API
//     // se ejecuta solo una vez al montar el componente
//     // y no se ejecuta en las actualizaciones
//     // (a menos que se especifique un array de dependencias)
//     // en este caso, no se especifica un array de dependencias
//     // por lo que se ejecuta solo una vez
//     useEffect(() => {
//         const fetchGastos = async () => {
//             try {
//                 const response = await fetch('http://localhost:8080/gastosfiltrado/')
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`)
//                 }
//                 const data = await response.json()
//                 setGastos(data)
//             } catch (e) {
//                 setError('Error al cargar los gastos. Por favor, intente de nuevo más tarde.')
//                 console.error('Error fetching gastos:', e)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchGastos()
//     }, [])

//     // calcular el total de los gastos
//     const totalMonto = gastos.reduce((acc, gasto) => acc + parseFloat(gasto.monto), 0)

//     // mostrar un mensaje de carga, error o la tabla de gastos
//     // dependiendo del estado de la petición fetch de los gastos al API REST de la app 
//     if (loading) {
//         return <div className="text-center py-10">Cargando gastos...</div>
//     }
// // si hay un error, mostrar un mensaje de error
//     if (error) {
//         return <div className="text-center py-10 text-red-500">{error}</div>
//     }

//     return (
//         // mostrar la tabla de gastos si no hay errores y ya se cargaron los gastos
//         <div className="space-y-4">
//             <h1 className="text-2xl font-bold">Tabla de Gastos</h1>

//             <Table>
//                 <TableCaption>Lista de tus gastos recientes</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Fecha</TableHead>
//                         <TableHead>Descripción</TableHead>
//                         <TableHead>Metodo Pago</TableHead>
//                         <TableHead className="text-right">Monto</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {gastos.length > 0 ? (
//                         <>
//                             {gastos.map((gasto) => (
//                                 <TableRow key={gasto.id}>
//                                     <TableCell>{new Date(gasto.fecha).toLocaleDateString()}</TableCell>
//                                     <TableCell>{gasto.descripcion || 'Sin descripción'}</TableCell>
//                                     <TableCell>{gasto.metodo_pago || 'Sin Metodo de Pago'}</TableCell>
//                                     <TableCell className="text-right">${parseFloat(gasto.monto).toFixed(2)}</TableCell>
//                                 </TableRow>
//                             ))}
//                             {/* Fila de total */}
//                             <TableRow>
//                                 <TableCell colSpan={3} className="font-bold text-right text-orange-600">Total</TableCell>
//                                 <TableCell className="text-right font-bold text-orange-600">${totalMonto.toFixed(2)}</TableCell>
//                             </TableRow>
//                         </>
//                     ) : (
//                         <TableRow>
//                             <TableCell colSpan={3} className="text-center">
//                                 No hay gastos registrados.
//                             </TableCell>
//                         </TableRow>
//                     )}
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// "use client"

// import * as React from "react"
// import {
//     ColumnDef,
//     ColumnFiltersState,
//     SortingState,
//     VisibilityState,
//     flexRender,
//     getCoreRowModel,
//     getFilteredRowModel,
//     getPaginationRowModel,
//     getSortedRowModel,
//     useReactTable,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//     DropdownMenu,
//     DropdownMenuCheckboxItem,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"

// const data: Payment[] = [
//     {
//         id: "m5gr84i9",
//         amount: 316,
//         status: "success",
//         email: "ken99@yahoo.com",
//     },
//     {
//         id: "3u1reuv4",
//         amount: 242,
//         status: "success",
//         email: "Abe45@gmail.com",
//     },
//     {
//         id: "derv1ws0",
//         amount: 837,
//         status: "processing",
//         email: "Monserrat44@gmail.com",
//     },
//     {
//         id: "5kma53ae",
//         amount: 874,
//         status: "success",
//         email: "Silas22@gmail.com",
//     },
//     {
//         id: "bhqecj4p",
//         amount: 721,
//         status: "failed",
//         email: "carmella@hotmail.com",
//     },
// ]

// export type Payment = {
//     id: string
//     amount: number
//     status: "pending" | "processing" | "success" | "failed"
//     email: string
// }

// export const columns: ColumnDef<Payment>[] = [
//     {
//         id: "select",
//         header: ({ table }) => (
//             <Checkbox
//                 checked={
//                     table.getIsAllPageRowsSelected() ||
//                     (table.getIsSomePageRowsSelected() && "indeterminate")
//                 }
//                 onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//                 aria-label="Select all"
//             />
//         ),
//         cell: ({ row }) => (
//             <Checkbox
//                 checked={row.getIsSelected()}
//                 onCheckedChange={(value) => row.toggleSelected(!!value)}
//                 aria-label="Select row"
//             />
//         ),
//         enableSorting: false,
//         enableHiding: false,
//     },
//     {
//         accessorKey: "status",
//         header: "Status",
//         cell: ({ row }) => (
//             <div className="capitalize">{row.getValue("status")}</div>
//         ),
//     },
//     {
//         accessorKey: "email",
//         header: ({ column }) => {
//             return (
//                 <Button
//                     variant="ghost"
//                     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//                 >
//                     Email
//                     <ArrowUpDown />
//                 </Button>
//             )
//         },
//         cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//     },
//     {
//         accessorKey: "amount",
//         header: () => <div className="text-right">Amount</div>,
//         cell: ({ row }) => {
//             const amount = parseFloat(row.getValue("amount"))

//             // Format the amount as a dollar amount
//             const formatted = new Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "USD",
//             }).format(amount)

//             return <div className="text-right font-medium">{formatted}</div>
//         },
//     },
//     {
//         id: "actions",
//         enableHiding: false,
//         cell: ({ row }) => {
//             const payment = row.original

//             return (
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" className="h-8 w-8 p-0">
//                             <span className="sr-only">Open menu</span>
//                             <MoreHorizontal />
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                         <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                         <DropdownMenuItem
//                             onClick={() => navigator.clipboard.writeText(payment.id)}
//                         >
//                             Copy payment ID
//                         </DropdownMenuItem>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuItem>View customer</DropdownMenuItem>
//                         <DropdownMenuItem>View payment details</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             )
//         },
//     },
// ]

// export default function DataTableDemo() {
//     const [sorting, setSorting] = React.useState<SortingState>([])
//     const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//         []
//     )
//     const [columnVisibility, setColumnVisibility] =
//         React.useState<VisibilityState>({})
//     const [rowSelection, setRowSelection] = React.useState({})

//     const table = useReactTable({
//         data,
//         columns,
//         onSortingChange: setSorting,
//         onColumnFiltersChange: setColumnFilters,
//         getCoreRowModel: getCoreRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//         getSortedRowModel: getSortedRowModel(),
//         getFilteredRowModel: getFilteredRowModel(),
//         onColumnVisibilityChange: setColumnVisibility,
//         onRowSelectionChange: setRowSelection,
//         state: {
//             sorting,
//             columnFilters,
//             columnVisibility,
//             rowSelection,
//         },
//     })

//     return (
//         <div className="w-full">
//             <div className="flex items-center placeholder-sky-400">
//                 <Input
//                     placeholder="Filter emails..."
//                     value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
//                     onChange={(event) =>
//                         table.getColumn("status")?.setFilterValue(event.target.value)
//                     }
//                     className="max-w-sm"
//                 />
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button variant="outline" className="ml-auto">
//                             Columns <ChevronDown />
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                         {table
//                             .getAllColumns()
//                             .filter((column) => column.getCanHide())
//                             .map((column) => {
//                                 return (
//                                     <DropdownMenuCheckboxItem
//                                         key={column.id}
//                                         className="capitalize"
//                                         checked={column.getIsVisible()}
//                                         onCheckedChange={(value) =>
//                                             column.toggleVisibility(!!value)
//                                         }
//                                     >
//                                         {column.id}
//                                     </DropdownMenuCheckboxItem>
//                                 )
//                             })}
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>
//             <div className="rounded-md border">
//                 <Table>
//                     <TableHeader>
//                         {table.getHeaderGroups().map((headerGroup) => (
//                             <TableRow key={headerGroup.id}>
//                                 {headerGroup.headers.map((header) => {
//                                     return (
//                                         <TableHead key={header.id}>
//                                             {header.isPlaceholder
//                                                 ? null
//                                                 : flexRender(
//                                                     header.column.columnDef.header,
//                                                     header.getContext()
//                                                 )}
//                                         </TableHead>
//                                     )
//                                 })}
//                             </TableRow>
//                         ))}
//                     </TableHeader>
//                     <TableBody>
//                         {table.getRowModel().rows?.length ? (
//                             table.getRowModel().rows.map((row) => (
//                                 <TableRow
//                                     key={row.id}
//                                     data-state={row.getIsSelected() && "selected"}
//                                 >
//                                     {row.getVisibleCells().map((cell) => (
//                                         <TableCell key={cell.id}>
//                                             {flexRender(
//                                                 cell.column.columnDef.cell,
//                                                 cell.getContext()
//                                             )}
//                                         </TableCell>
//                                     ))}
//                                 </TableRow>
//                             ))
//                         ) : (
//                             <TableRow>
//                                 <TableCell
//                                     colSpan={columns.length}
//                                     className="h-24 text-center"
//                                 >
//                                     No results.
//                                 </TableCell>
//                             </TableRow>
//                         )}
//                     </TableBody>
//                 </Table>
//             </div>
//             <div className="flex items-center justify-end space-x-2 py-4">
//                 <div className="flex-1 text-sm text-muted-foreground">
//                     {table.getFilteredSelectedRowModel().rows.length} of{" "}
//                     {table.getFilteredRowModel().rows.length} row(s) selected.
//                 </div>
//                 <div className="space-x-2">
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => table.previousPage()}
//                         disabled={!table.getCanPreviousPage()}
//                     >
//                         Previous
//                     </Button>
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => table.nextPage()}
//                         disabled={!table.getCanNextPage()}
//                     >
//                         Next
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }


// Nuevo
"use client";

import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export type Gasto = {
    id: number;
    fecha: string;
    descripcion: string;
    monto: number;
    metodo_pago?: string;
};

// columnas de la tabla de gastos
export const columns: ColumnDef<Gasto>[] = [
    {
        // columna de selección de filas
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        // celda de selección de fila
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    },
    {
        accessorKey: "fecha",
        header: "Fecha",
        cell: ({ row }) => (
            <div>{new Date(row.getValue("fecha")).toLocaleDateString()}</div>
        ),
    },
    {
        accessorKey: "descripcion",
        header: "Descripción",
    },
    {
        accessorKey: "metodo_pago",
        header: "Método Pago",
        cell: ({ row }) => row.getValue("metodo_pago") || "Sin Método de Pago",
    },
    {
        accessorKey: "monto",
        header: "Monto",
        cell: ({ row }) => {
            const monto = parseFloat(row.getValue("monto"));
            return (
                <div className="text-right font-medium">
                    ${monto.toFixed(2)}
                </div>
            );
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const gasto = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(gasto.id.toString())}
                        >
                            Copy ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export default function TablaGastosPage() {
    const [gastos, setGastos] = React.useState<Gasto[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    );
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    // Fetch data from the API
    React.useEffect(() => {
        const fetchGastos = async () => {
            try {
                const response = await fetch("http://localhost:8080/gastosfiltrado/");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setGastos(data);
            } catch (e) {
                setError("Error al cargar los gastos. Por favor, intente de nuevo.");
                console.error("Error fetching gastos:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchGastos();
    }, []);

    const table = useReactTable({
        data: gastos,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    if (loading) {
        return <div className="text-center py-10">Cargando gastos...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <div className="w-full">
            <div className="flex items-center">
                <Input
                    placeholder="Filtrar por descripción..."
                    value={
                        (table.getColumn("descripcion")?.getFilterValue() as string) ?? ""
                    }
                    onChange={(event) =>
                        table.getColumn("descripcion")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border mt-4">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center">
                                    No hay datos disponibles.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
