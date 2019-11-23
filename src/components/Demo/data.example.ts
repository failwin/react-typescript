/* eslint-disable comma-dangle */

export { getText } from './Demo';

export function generateData(rowsCount = 1, cellsCount = 1, startRowIndex = 0) {
    return Array.from(Array(rowsCount)).map((r, rowIndex) => (
        Array.from(Array(cellsCount)).map((c, cellIndex) => (
            {
                data: `cell-${rowIndex + startRowIndex}-${cellIndex}`,
            }
        ))
    ));
}

export function generateUniqueKey(min = 100, max = 1000): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function mergeData(firstArray?: Array<any>, secondArray?: Array<any>): Array<any> {
    if (!firstArray && !secondArray) {
        return [];
    }
    if (!firstArray && secondArray) {
        return secondArray;
    }
    if (firstArray && !secondArray) {
        return firstArray;
    }
    return (firstArray || []).concat(secondArray || []);
}

export const defaultQuery = {
    datasource: {
        title: 'Sample Healthcare',
        fullname: 'LocalHost/Sample Healthcare',
        id: 'aLOCALHOST_aSAMPLEIAAaHEALTHCARE',
        address: 'LocalHost',
        database: 'aSampleIAAaHealthcare',
        lastBuildTime: '2018-06-06T17:55:09',
    },
    format: 'pivot',
    count: 100000,
    offset: 0,
    grandTotals: {
        title: 'Grand Total',
    },
    metadata: [
        {
            jaql: {
                table: 'Divisions',
                column: 'Divison_name',
                dim: '[Divisions.Divison_name]',
                datatype: 'text',
                merged: true,
                title: 'Divison_name',
            },
            panel: 'rows',
            field: {
                id: '[Divisions.Divison_name]',
                index: 0,
            },
        },
        {
            jaql: {
                table: 'Admissions',
                column: 'Cost_of_admission',
                dim: '[Admissions.Cost_of_admission]',
                datatype: 'numeric',
                agg: 'sum',
                title: 'Total Cost_of_admission',
            },
            panel: 'measures',
            field: {
                id: '[Admissions.Cost_of_admission]_sum',
                index: 1,
            },
            format: {
                mask: {
                    type: 'number',
                    t: true,
                    b: true,
                    separated: true,
                    decimals: 'auto',
                    isdefault: true,
                },
                color: {
                    type: 'color',
                    color: 'transparent',
                },
            },
        }
    ],
    m2mThresholdFlag: 1,
    isMaskedResult: true,
    widget: '5b83ba5edd224a0d98897132;',
    dashboard: '5b83b98add224a0d98897129;Pivot2',
    queryGuid: '9e3c33d4-90b7-4bff-a0a1-855767ccb244',
};

export const defaultCustomData = {
    request: {
        datasource: {
            title: 'Sample Healthcare',
            fullname: 'LocalHost/Sample Healthcare',
            id: 'aLOCALHOST_aSAMPLEIAAaHEALTHCARE',
            address: 'LocalHost',
            database: 'aSampleIAAaHealthcare',
            lastBuildTime: '2018-06-06T17:55:09'
        },
        format: 'pivot',
        count: 100000,
        offset: 0,
        grandTotals: {
            columns: true,
            rows: true,
            title: 'Grand Total'
        },
        metadata: [
            {
                jaql: {
                    table: 'Divisions',
                    column: 'Divison_name',
                    dim: '[Divisions.Divison_name]',
                    datatype: 'text',
                    merged: true,
                    title: 'Divison_name'
                },
                field: {
                    id: '[Divisions.Divison_name]',
                    index: 0
                },
                format: {
                    subtotal: true
                },
                panel: 'rows'
            },
            {
                jaql: {
                    table: 'Doctors',
                    column: 'Specialty',
                    dim: '[Doctors.Specialty]',
                    datatype: 'text',
                    merged: true,
                    title: 'Specialty'
                },
                field: {
                    index: 1
                },
                disabled: false,
                panel: 'rows'
            },
            {
                jaql: {
                    table: 'Admissions',
                    column: 'Admission_Time',
                    dim: '[Admissions.Admission_Time (Calendar)]',
                    datatype: 'datetime',
                    merged: true,
                    level: 'years',
                    title: 'Years in Admission_Time'
                },
                format: {
                    mask: {
                        years: 'yyyy',
                        quarters: 'yyyy Q',
                        months: 'MM/yyyy',
                        weeks: 'ww yyyy',
                        days: 'shortDate',
                        minutes: 'HH:mm',
                        isdefault: true
                    },
                    subtotal: true
                },
                hierarchies: ['calendar',
                    'calendar - weeks'
                ],
                field: {
                    id: '[Admissions.Admission_Time (Calendar)]_years',
                    index: 2
                },
                disabled: false,
                panel: 'columns'
            },
            {
                jaql: {
                    table: 'Admissions',
                    column: 'Admission_Time',
                    dim: '[Admissions.Admission_Time (Calendar)]',
                    datatype: 'datetime',
                    merged: true,
                    level: 'quarters',
                    title: 'Quarters in Admission_Time'
                },
                panel: 'columns',
                field: {
                    id: '[Admissions.Admission_Time (Calendar)]_quarters',
                    index: 3
                },
                format: {
                    mask: {
                        years: 'yyyy',
                        quarters: 'yyyy Q',
                        months: 'MM/yyyy',
                        weeks: 'ww yyyy',
                        days: 'shortDate',
                        minutes: 'HH:mm',
                        isdefault: true
                    }
                },
                hierarchies: ['calendar',
                    'calendar - weeks'
                ]
            },
            {
                jaql: {
                    table: 'Conditions time of stay',
                    column: 'Positive',
                    dim: '[Conditions.Positive1]',
                    datatype: 'numeric',
                    agg: 'sum',
                    title: 'Total Positive'
                },
                panel: 'measures',
                field: {
                    id: '[Conditions.Positive1]_sum',
                    index: 4
                },
                format: {
                    mask: {
                        type: 'number',
                        t: true,
                        b: true,
                        separated: true,
                        decimals: 'auto',
                        isdefault: true
                    },
                    color: {
                        type: 'color',
                        color: 'transparent'
                    }
                }
            },
            {
                jaql: {
                    table: 'Conditions time of stay',
                    column: 'Negative',
                    dim: '[Conditions.Negative1]',
                    datatype: 'numeric',
                    agg: 'sum',
                    title: 'Total Negative'
                },
                panel: 'measures',
                field: {
                    id: '[Conditions.Negative1]_sum',
                    index: 5
                },
                format: {
                    mask: {
                        type: 'number',
                        t: true,
                        b: true,
                        separated: true,
                        decimals: 'auto',
                        isdefault: true
                    },
                    color: {
                        type: 'color',
                        color: 'transparent'
                    }
                },
                disabled: false
            }
        ],
        m2mThresholdFlag: 1,
        isMaskedResult: true,
        widget: '5b83ba5edd224a0d98897132;',
        dashboard: '5b83b98add224a0d98897129;Pivot2',
        queryGuid: '9e3c33d4-90b7-4bff-a0a1-855767ccb244'
    },
    response: {
        headers: [
            {
                children: [{
                    value: '2011-01-01T00:00:00.000',
                    children: [{
                        value: '2011-07-01T00:00:00.000',
                        index: 0
                    }, {
                        value: '2011-10-01T00:00:00.000',
                        index: 2
                    }],
                    index: 4
                }, {
                    value: '2012-01-01T00:00:00.000',
                    children: [{
                        value: '2012-01-01T00:00:00.000',
                        index: 6
                    }, {
                        value: '2012-04-01T00:00:00.000',
                        index: 8
                    }, {
                        value: '2012-07-01T00:00:00.000',
                        index: 10
                    }, {
                        value: '2012-10-01T00:00:00.000',
                        index: 12
                    }],
                    index: 14
                }, {
                    value: '2013-01-01T00:00:00.000',
                    children: [{
                        value: '2013-01-01T00:00:00.000',
                        index: 16
                    }, {
                        value: '2013-04-01T00:00:00.000',
                        index: 18
                    }],
                    index: 20
                }],
                index: 22
            }
        ],
        data: [
            [
                {
                    value: 'Cardiology',
                    children: [{
                        value: 'Cardiology',
                        data: [
                            '214', '406', '1306', '2458', '1520', '2864', '2004', '3828', '2240',
                            '4256', '3616', '6688', '3415', '6487', '11275', '21259', '4754',
                            '8978', '5083', '9595', '9837', '18573', '22632', '42696'
                        ]
                    }, {
                        value: 'Emergency Room',
                        data: ['872', '1640', '1391', '2639', '2263', '4279', '1537', '2881',
                            '1382', '2630', '4032', '7584', '5585', '10673', '12536', '23768',
                            '4877', '9197', '4634', '8762', '9511', '17959', '24310', '46006'
                        ]
                    }, {
                        value: 'Neurology',
                        data: [null, null, '342', '630', '342', '630', '1326', '2478', '1406',
                            '2654', '1558', '2902', '2544', '4752', '6834', '12786', '2310',
                            '4326', '2642', '4946', '4952', '9272', '12128', '22688'
                        ]
                    }, {
                        value: 'Oncology',
                        data: ['440', '824', '1815', '3447', '2255', '4271', '3967', '7423',
                            '4653', '8781', '5400', '10104', '6523', '12283', '20543', '38591',
                            '7934', '14942', '7429', '13957', '15363', '28899', '38161', '71761'
                        ]
                    }, {
                        value: 'Pediatrics',
                        data: ['1183', '2239', '1624', '3064', '2807', '5303', '2479', '4591',
                            '3171', '6051', '5596', '10684', '6680', '12632', '17926', '33958',
                            '7494', '14118', '7541', '14357', '15035', '28475', '35768', '67736'
                        ]
                    }, {
                        value: 'Surgeon',
                        data: ['226', '418', '758', '1430', '984', '1848', '888', '1656', '1202',
                            '2258', '1453', '2797', '2026', '3850', '5569', '10561', '2878', '5470',
                            '3227', '6107', '6105', '11577', '12658', '23986'
                        ]
                    }],
                    data: ['2935', '5527', '7236', '13668', '10171', '19195', '12201', '22857',
                        '14054', '26630', '21655', '40759', '26773', '50677', '74683', '140923',
                        '30247', '57031', '30556', '57724', '60803', '114755', '145657', '274873'
                    ]
                },
                {
                    value: 'Neurology',
                    children: [{
                        value: 'Cardiology',
                        data: ['470', '854', '654', '1230', '1124', '2084', '1136', '2096', '2352',
                            '4368', '1924', '3652', '3046', '5734', '8458', '15850', '2993', '5681',
                            '3868', '7324', '6861', '13005', '16443', '30939'
                        ]
                    }, {
                        value: 'Emergency Room',
                        data: ['438', '822', '954', '1818', '1392', '2640', '759', '1431', '1181',
                            '2237', '1793', '3425', '3561', '6729', '7294', '13822', '3206', '6086',
                            '3932', '7388', '7138', '13474', '15824', '29936']
                    }, {
                        value: 'Neurology',
                        data: ['112', '208', '555', '1035', '667', '1243', '576', '1056', '865',
                            '1633', '549', '1029', '1295', '2447', '3285', '6165', '2228', '4244',
                            '1547', '2891', '3775', '7135', '7727', '14543'
                        ]
                    }, {
                        value: 'Oncology',
                        data: ['104', '200', '884', '1652', '988', '1852', '1508', '2852', '3102',
                            '5886', '3186', '5970', '2398', '4510', '10194', '19218', '6562',
                            '12322', '5396', '10196', '11958', '22518', '23140', '43588'
                        ]
                    }, {
                        value: 'Pediatrics',
                        data: ['435', '819', '888', '1656', '1323', '2475', '2059', '3883', '3383',
                            '6359', '4244', '8084', '4226', '7970', '13912', '26296', '5985',
                            '11265', '4699', '8731', '10684', '19996', '25919', '48767'
                        ]
                    }, {
                        value: 'Surgeon',
                        data: [null, null, '547', '1027', '547', '1027', '876', '1644', '320',
                            '608', '1057', '2017', '1629', '3069', '3882', '7338', '2329', '4345',
                            '1850', '3482', '4179', '7827', '8608', '16192'
                        ]
                    }],
                    data: ['1559', '2903', '4482', '8418', '6041', '11321', '6914', '12962',
                        '11203', '21091', '12753', '24177', '16155', '30459', '47025', '88689',
                        '23303', '43943', '21292', '40012', '44595', '83955', '97661', '183965'
                    ]
                }
            ],
            [
                {
                    value: 'Oncology',
                    children: [{
                        value: 'Cardiology',
                        data: ['126', '222', '319', '607', '445', '829', '1079', '2039', '1781',
                            '3317', '2774', '5270', '2593', '4897', '8227', '15523', '3907', '7363',
                            '3329', '6305', '7236', '13668', '15908', '30020'
                        ]
                    }, {
                        value: 'Emergency Room',
                        data: ['220', '412', '449', '833', '669', '1245', '1270', '2422', '1723',
                            '3259', '2846', '5342', '2475', '4779', '8314', '15802', '4709', '8741',
                            '3336', '6312', '8045', '15053', '17028', '32100'
                        ]
                    }, {
                        value: 'Neurology',
                        data: ['108', '204', '336', '624', '444', '828', '426', '810', '1296',
                            '2448', '1819', '3451', '1353', '2601', '4894', '9310', '1715', '3251',
                            '1982', '3710', '3697', '6961', '9035', '17099'
                        ]
                    }, {
                        value: 'Oncology',
                        data: ['99', '195', '1080', '2040', '1179', '2235', '2493', '4701', '2203',
                            '4123', '4835', '9059', '4325', '8165', '13856', '26048', '5444',
                            '10244', '5058', '9474', '10502', '19718', '25537', '48001'
                        ]
                    }, {
                        value: 'Pediatrics',
                        data: ['328', '616', '1066', '2026', '1394', '2642', '2090', '3914', '3660',
                            '6924', '4438', '8374', '4994', '9410', '15182', '28622', '6079',
                            '11455', '6576', '12432', '12655', '23887', '29231', '55151'
                        ]
                    }, {
                        value: 'Surgeon',
                        data: ['226', '418', '435', '819', '661', '1237', '1153', '2209', '1181',
                            '2237', '1469', '2717', '746', '1418', '4549', '8581', '1458', '2706',
                            '1043', '2003', '2501', '4709', '7711', '14527'
                        ]
                    }],
                    data: ['1107', '2067', '3685', '6949', '4792', '9016', '8511', '16095', '11844',
                        '22308', '18181', '34213', '16486', '31270', '55022', '103886', '23312',
                        '43760', '21324', '40236', '44636', '83996', '104450', '196898'
                    ]
                },
                {
                    value: 'Operating Rooms',
                    children: [{
                        value: 'Cardiology',
                        data: ['116', '212', '725', '1397', '841', '1609', '1583', '3023', '3692',
                            '6956', '3011', '5699', '2906', '5498', '11192', '21176', '4504',
                            '8440', '2740', '5140', '7244', '13580', '19277', '36365'
                        ]
                    }, {
                        value: 'Emergency Room',
                        data: ['220', '412', '1521', '2865', '1741', '3277', '1405', '2653', '2178',
                            '4098', '1805', '3341', '3095', '5783', '8483', '15875', '3879', '7239',
                            '3159', '5943', '7038', '13182', '17262', '32334'
                        ]
                    }, {
                        value: 'Neurology',
                        data: [null, null, '437', '821', '437', '821', null, null, '1639', '3079',
                            '1062', '2022', '1286', '2438', '3987', '7539', '2000', '3728', '2024',
                            '3848', '4024', '7576', '8448', '15936'
                        ]
                    }, {
                        value: 'Oncology',
                        data: ['436', '820', '1234', '2290', '1670', '3110', '1877', '3509', '3296',
                            '6272', '3058', '5746', '4419', '8355', '12650', '23882', '6972',
                            '13116', '5732', '10820', '12704', '23936', '27024', '50928'
                        ]
                    }, {
                        value: 'Pediatrics',
                        data: ['429', '813', '873', '1641', '1302', '2454', '2568', '4872', '2702',
                            '5102', '3780', '7044', '4425', '8361', '13475', '25379', '5278',
                            '9982', '6152', '11624', '11430', '21606', '26207', '49439']
                    }, {
                        value: 'Surgeon',
                        data: ['122', '218', '558', '1038', '680', '1256', '749', '1421', '821',
                            '1493', '1504', '2848', '1100', '2060', '4174', '7822', '2007', '3735',
                            '1972', '3700', '3979', '7435', '8833', '16513'
                        ]
                    }],
                    data: ['1323', '2475', '5348', '10052', '6671', '12527', '8182', '15478',
                        '14328', '27000', '14220', '26700', '17231', '32495', '53961', '101673',
                        '24640', '46240', '21779', '41075', '46419', '87315', '107051', '201515'
                    ]
                }
            ],
            [
                {
                    value: 'Pediatrics',
                    children: [{
                        value: 'Cardiology',
                        data: ['108', '204', '1064', '2024', '1172', '2228', '1190', '2246', '1304',
                            '2456', '2502', '4710', '2629', '4933', '7625', '14345', '3532', '6604',
                            '3593', '6761', '7125', '13365', '15922', '29938'
                        ]
                    }, {
                        value: 'Emergency Room',
                        data: ['244', '436', '779', '1451', '1023', '1887', '866', '1634', '1078',
                            '2038', '2883', '5379', '2252', '4172', '7079', '13223', '2681', '4985',
                            '3031', '5719', '5712', '10704', '13814', '25814'
                        ]
                    }, {
                        value: 'Neurology',
                        data: ['104', '200', '467', '851', '571', '1051', '466', '850', '727',
                            '1399', '1766', '3302', '1078', '2038', '4037', '7589', '1403', '2651',
                            '1646', '3086', '3049', '5737', '7657', '14377'
                        ]
                    }, {
                        value: 'Oncology',
                        data: ['211', '403', '853', '1621', '1064', '2024', '1897', '3529', '3149',
                            '5933', '3444', '6516', '2835', '5427', '11325', '21405', '3530',
                            '6602', '4485', '8421', '8015', '15023', '20404', '38452'
                        ]
                    }, {
                        value: 'Pediatrics',
                        data: ['315', '603', '1743', '3279', '2058', '3882', '1482', '2826', '2418',
                            '4530', '2947', '5635', '4090', '7642', '10937', '20633', '4369',
                            '8209', '4909', '9325', '9278', '17534', '22273', '42049'
                        ]
                    }, {
                        value: 'Surgeon',
                        data: ['230', '422', '319', '607', '549', '1029', '571', '1051', '896',
                            '1664', '866', '1634', '1353', '2505', '3686', '6854', '2066', '3890',
                            '1732', '3268', '3798', '7158', '8033', '15041'
                        ]
                    }],
                    data: ['1212', '2268', '5225', '9833', '6437', '12101', '6472', '12136', '9572',
                        '18020', '14408', '27176', '14237', '26717', '44689', '84049', '17581',
                        '32941', '19396', '36580', '36977', '69521', '88103', '165671'
                    ]
                }
            ]
        ],
        dataFinish: [
            { value: 'dataFinish', rowsCount: 35 }
        ],
        grand: [
            {
                value: 'grandTotals',
                data: ['8136', '15240', '25976', '48920', '34112', '64160', '42280', '79528',
                    '61001', '115049', '81217', '153025', '90882', '171618', '275380', '519220',
                    '119083', '223915', '114347', '215627', '233430', '439542', '1301', '2453'
                ]
            }
        ],
        totalRows: [
            { value: 'totalRows', rowsCount: 35 }
        ],
        finish: [{}]
    }
};

export default {
    generateData,
    generateUniqueKey,
    mergeData,
    defaultQuery,
    defaultCustomData,
};
