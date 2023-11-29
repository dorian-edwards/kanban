import { Board } from '../interfaces'

export default function populateBoard(populate: boolean): Board[] {
  return !populate
    ? []
    : [
        {
          id: '1',
          title: 'Platform Launch',
          columns: [
            {
              title: 'Column 1',
              tasks: [
                {
                  id: '1',
                  title: 'Task 1',
                  description: 'Task 1 Description',
                  subtasks: [
                    {
                      id: '1',
                      description: 'SubTask 1',
                      complete: true,
                    },
                    {
                      id: '2',
                      description: 'SubTask 2',
                      complete: false,
                    },
                  ],
                },
                {
                  id: '2',
                  title: 'Task 2',
                  description: 'Task 2 Description',
                  subtasks: [
                    {
                      id: '3',
                      description: 'SubTask 3',
                      complete: false,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Column 2',
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
