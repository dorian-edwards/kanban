import { BoardData } from '../interfaces/DataInterfaces'

export function populateBoardObject(populate: boolean): BoardData {
  return !populate
    ? { activeBoard: '', boards: {}, columns: {}, tasks: {}, subtasks: {} }
    : {
        activeBoard: 'BAIF1685',
        boards: {
          BOSX2837: {
            id: 'BOSX2837',
            title: 'Platform Launch',
          },
          BQJP8590: {
            id: 'BQJP8590',
            title: 'Marketing Plan',
          },
          BAIF1685: {
            id: 'BAIF1685',
            title: 'Roadmap',
          },
        },
        columns: {
          CIEF8839: {
            id: 'CIEF8839',
            title: 'Todo',
            boardId: 'BOSX2837',
          },
          CEAB6733: {
            id: 'CEAB6733',
            title: 'Doing',
            boardId: 'BOSX2837',
          },
          CQFO9181: {
            id: 'CQFO9181',
            title: 'Done',
            boardId: 'BOSX2837',
          },
        },
        tasks: {
          TTUY9128: {
            id: 'TTUY9128',
            title: 'Build UI for onboarding flow',
            description: '',
            columnId: 'CIEF8839',
          },
          TIWU3896: {
            id: 'TIWU3896',
            title: 'Build UI for search',
            description: '',
            columnId: 'CIEF8839',
          },
          TAUS8244: {
            id: 'TAUS8244',
            title: 'Build settings UI',
            description: '',
            columnId: 'CIEF8839',
          },
          TFNA9223: {
            id: 'TFNA9223',
            title: 'QA and test all major user journeys',
            description: '',
            columnId: 'CIEF8839',
          },
          TDHN6081: {
            id: 'TDHN6081',
            title: 'Design settings and search pages',
            description: '',
            columnId: 'CEAB6733',
          },
          TVCB7191: {
            id: 'TVCB7191',
            title: 'Add account management endpoints',
            description: '',
            columnId: 'CEAB6733',
          },
          TJZI2545: {
            id: 'TJZI2545',
            title: 'Design onboarding flow',
            description: '',
            columnId: 'CEAB6733',
          },
          TFRZ8332: {
            id: 'TFRZ8332',
            title: 'Add search enpoints',
            description: '',
            columnId: 'CEAB6733',
          },
          TMEX4735: {
            id: 'TMEX4735',
            title: 'Add authentication endpoints',
            description: '',
            columnId: 'CEAB6733',
          },
          TFVV5640: {
            id: 'TFVV5640',
            title:
              'Research pricing points of various competitors and trial different business models',
            description:
              "We know what we're planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            columnId: 'CEAB6733',
          },
          TUBX3699: {
            id: 'TUBX3699',
            title: 'Conduct 5 wireframe tests',
            description: '',
            columnId: 'CQFO9181',
          },
          TMDJ9027: {
            id: 'TMDJ9027',
            title: 'Create wireframe prototype',
            description: '',
            columnId: 'CQFO9181',
          },
          TQLK9629: {
            id: 'TQLK9629',
            title: 'Review results of usability tests and iterate',
            description: '',
            columnId: 'CQFO9181',
          },
          THYO8069: {
            id: 'THYO8069',
            title:
              'Create paper prototypes and conduct 10 usability tests with potential customers',
            description: '',
            columnId: 'CQFO9181',
          },
          TMHK1655: {
            id: 'TMHK1655',
            title: 'Market discovery',
            description: '',
            columnId: 'CQFO9181',
          },
          THHP9396: {
            id: 'THHP9396',
            title: 'Competitor analysis',
            description: '',
            columnId: 'CQFO9181',
          },
          TAWP8134: {
            id: 'TAWP8134',
            title: 'Research the market',
            description: '',
            columnId: 'CQFO9181',
          },
        },
        subtasks: {
          STSVH9345: {
            id: 'STSVH9345',
            description: 'Research competitor pricing and business models',
            taskId: 'TFVV5640',
            complete: true,
          },
          STOCS6452: {
            id: 'STOCS6452',
            description: 'Outline a business model that works for our solution',
            taskId: 'TFVV5640',
            complete: true,
          },
          STVRL7629: {
            id: 'STVRL7629',
            description:
              'Talk to potential customers about our proposed solution and ask for fair price expectancy',
            taskId: 'TFVV5640',
            complete: false,
          },
        },
      }
}
