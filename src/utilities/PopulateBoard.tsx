import { BoardData } from '../interfaces/DataInterfaces'

// export function populateBoardArray(populate: boolean): Board[] {
//   return !populate
//     ? []
//     : [
//         {
//           id: 'B1',
//           title: 'Platform Launch',
//           columns: [
//             {
//               id: 'PLC1',
//               title: 'Todo',
//               tasks: [
//                 {
//                   id: 'PLC1T1',
//                   title: 'Build UI for onboarding flow',
//                   description:
//                     "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
//                   subtasks: [
//                     {
//                       id: 'PLC1T1S1',
//                       description: 'SubTask 1',
//                       complete: true,
//                     },
//                     {
//                       id: 'PLC1T1S2',
//                       description: 'SubTask 2',
//                       complete: true,
//                     },
//                     {
//                       id: 'PLC1T1S3',
//                       description: 'SubTask 3',
//                       complete: false,
//                     },
//                   ],
//                 },
//                 {
//                   id: 'PLC1T2',
//                   title: 'Build UI for search',
//                   description: 'Task 2 Description',
//                   subtasks: [
//                     {
//                       id: '3',
//                       description: 'SubTask 3',
//                       complete: false,
//                     },
//                   ],
//                 },
//                 {
//                   id: 'PLC1T3',
//                   title: 'Create template structures',
//                   description: 'Task 2 Description',
//                   subtasks: [
//                     {
//                       id: '3',
//                       description: 'SubTask 3',
//                       complete: false,
//                     },
//                   ],
//                 },
//                 {
//                   id: 'PLC1T4',
//                   title: 'QA and test all major user journeys',
//                   description: 'Task 2 Description',
//                   subtasks: [
//                     {
//                       id: '3',
//                       description: 'SubTask 3',
//                       complete: true,
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               id: 'PLC2',
//               title: 'Done',
//               tasks: [
//                 {
//                   id: '3',
//                   title: 'Task 3',
//                   description: 'Task 3 Description',
//                   subtasks: [
//                     {
//                       id: '4',
//                       description: 'SubTask 4',
//                       complete: true,
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           id: '2',
//           title: 'Marketing',
//           columns: [
//             {
//               id: 'c1',
//               title: 'Column 1',
//               tasks: [
//                 {
//                   id: '4',
//                   title: 'Task 4',
//                   description: 'Task 4 Description',
//                   subtasks: [
//                     {
//                       id: '5',
//                       description: 'SubTask 5',
//                       complete: false,
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ]
// }

export function populateBoardObject(populate: boolean): BoardData {
  return !populate
    ? { activeBoard: '', boards: {}, columns: {}, tasks: {}, subtasks: {} }
    : {
        activeBoard: '',
        boards: {
          BOSN4590: { id: 'BOSN4590', title: 'Platform Launch' },
          BWTM1785: { id: 'BWTM1785', title: 'Marketing' },
        },
        columns: {
          CATU4720: { id: 'CATU4720', title: 'Todo', boardId: 'BOSN4590' },
          CEHE6807: { id: 'CEHE6807', title: 'Done', boardId: 'BOSN4590' },
          CDDU7226: { id: 'CDDU7226', title: 'Column 1', boardId: 'BWTM1785' },
        },
        tasks: {
          TQCL1142: {
            id: 'TQCL1142',
            title: 'Build UI for onboarding flow',
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            columnId: 'CATU4720',
          },
          TIQA2420: {
            id: 'TIQA2420',
            title: 'Build UI for search',
            description: 'Task 2 Description',
            columnId: 'CATU4720',
          },
          TSDC2880: {
            id: 'TSDC2880',
            title: 'Create template structures',
            description: 'Task 2 Description',
            columnId: 'CATU4720',
          },
          TPUG5702: {
            id: 'TPUG5702',
            title: 'QA and test all major user journeys',
            description: 'Task 2 Description',
            columnId: 'CATU4720',
          },
          TENM6695: {
            id: 'TENM6695',
            title: 'Task 3',
            description: 'Task 3 Description',
            columnId: 'CEHE6807',
          },
          TIEE8843: {
            id: 'TIEE8843',
            title: 'Task 4',
            description: 'Task 4 Description',
            columnId: 'CDDU7226',
          },
        },
        subtasks: {
          STOQH7877: {
            id: 'STOQH7877',
            description: 'SubTask 1',
            complete: true,
            taskId: 'TQCL1142',
          },
          STXSG3450: {
            id: 'STXSG3450',
            description: 'SubTask 2',
            complete: true,
            taskId: 'TQCL1142',
          },
          STOHC9173: {
            id: 'STOHC9173',
            description: 'SubTask 3',
            complete: false,
            taskId: 'TQCL1142',
          },
          STGAA6650: {
            id: 'STGAA6650',
            description: 'SubTask 3',
            complete: false,
            taskId: 'TIQA2420',
          },
          STHJJ4224: {
            id: 'STHJJ4224',
            description: 'SubTask 3',
            complete: false,
            taskId: 'TSDC2880',
          },
          STCYA7381: {
            id: 'STCYA7381',
            description: 'SubTask 3',
            complete: true,
            taskId: 'TPUG5702',
          },
          STGWH8043: {
            id: 'STGWH8043',
            description: 'SubTask 4',
            complete: true,
            taskId: 'TENM6695',
          },
          STDGS9653: {
            id: 'STDGS9653',
            description: 'SubTask 5',
            complete: false,
            taskId: 'TIEE8843',
          },
        },
      }
}
