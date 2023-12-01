import { Board } from '../interfaces'

export default function populateBoard(populate: boolean): Board[] {
  return !populate
    ? []
    : [
        {
          id: 'B1',
          title: 'Platform Launch',
          columns: [
            {
              id: 'PLC1',
              title: 'Todo',
              tasks: [
                {
                  id: 'PLC1T1',
                  title: 'Build UI for onboarding flow',
                  description: 'Task 1 Description',
                  subtasks: [
                    {
                      id: 'PLC1T1S1',
                      description: 'SubTask 1',
                      complete: true,
                    },
                    {
                      id: 'PLC1T1S2',
                      description: 'SubTask 2',
                      complete: true,
                    },
                    {
                      id: 'PLC1T1S3',
                      description: 'SubTask 3',
                      complete: false,
                    },
                  ],
                },
                {
                  id: 'PLC1T2',
                  title: 'Build UI for search',
                  description: 'Task 2 Description',
                  subtasks: [
                    {
                      id: '3',
                      description: 'SubTask 3',
                      complete: false,
                    },
                  ],
                },
                {
                  id: 'PLC1T3',
                  title: 'Create template structures',
                  description: 'Task 2 Description',
                  subtasks: [
                    {
                      id: '3',
                      description: 'SubTask 3',
                      complete: false,
                    },
                  ],
                },
                {
                  id: 'PLC1T4',
                  title: 'QA and test all major user journeys',
                  description: 'Task 2 Description',
                  subtasks: [
                    {
                      id: '3',
                      description: 'SubTask 3',
                      complete: true,
                    },
                  ],
                },
              ],
            },
            {
              id: 'PLC2',
              title: 'Done',
              tasks: [
                {
                  id: '3',
                  title: 'Task 3',
                  description: 'Task 3 Description',
                  subtasks: [
                    {
                      id: '4',
                      description: 'SubTask 4',
                      complete: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: '2',
          title: 'Marketing',
          columns: [
            {
              id: 'c1',
              title: 'Column 1',
              tasks: [
                {
                  id: '4',
                  title: 'Task 4',
                  description: 'Task 4 Description',
                  subtasks: [
                    {
                      id: '5',
                      description: 'SubTask 5',
                      complete: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]
}
