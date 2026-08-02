import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { EnvironmentGitStatus, FileChange } from "../../gitpod/v1/environment_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file supervisor/v1/environmentopts.proto.
 */
export declare const file_supervisor_v1_environmentopts: GenFile;
/**
 * empty for now to allow for future expansion on GetGitStatus rpc
 *
 * @generated from message supervisor.v1.GetGitStatusRequest
 */
export type GetGitStatusRequest = Message<"supervisor.v1.GetGitStatusRequest"> & {};
/**
 * Describes the message supervisor.v1.GetGitStatusRequest.
 * Use `create(GetGitStatusRequestSchema)` to create a new message.
 */
export declare const GetGitStatusRequestSchema: GenMessage<GetGitStatusRequest>;
/**
 * @generated from message supervisor.v1.GetGitStatusResponse
 */
export type GetGitStatusResponse = Message<"supervisor.v1.GetGitStatusResponse"> & {
    /**
     * @generated from field: gitpod.v1.EnvironmentGitStatus status = 1;
     */
    status?: EnvironmentGitStatus;
};
/**
 * Describes the message supervisor.v1.GetGitStatusResponse.
 * Use `create(GetGitStatusResponseSchema)` to create a new message.
 */
export declare const GetGitStatusResponseSchema: GenMessage<GetGitStatusResponse>;
/**
 * @generated from message supervisor.v1.GetGitDiffRequest
 */
export type GetGitDiffRequest = Message<"supervisor.v1.GetGitDiffRequest"> & {
    /**
     * path is the relative path of the file to get the diff for
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * this directly maps to the unified parameter (-U) of git diff
     * which controls the number of lines of context around a hunk
     *
     * @generated from field: int32 unified = 2;
     */
    unified: number;
    /**
     * base_ref is the git ref to diff against (e.g. "origin/main").
     * When empty, diffs against HEAD (uncommitted changes only).
     * When set, diffs from merge-base(base_ref, HEAD) to the working tree.
     *
     * @generated from field: string base_ref = 3;
     */
    baseRef: string;
};
/**
 * Describes the message supervisor.v1.GetGitDiffRequest.
 * Use `create(GetGitDiffRequestSchema)` to create a new message.
 */
export declare const GetGitDiffRequestSchema: GenMessage<GetGitDiffRequest>;
/**
 * @generated from message supervisor.v1.GetGitDiffResponse
 */
export type GetGitDiffResponse = Message<"supervisor.v1.GetGitDiffResponse"> & {
    /**
     * file_change is the current file change for the requested file at time of request
     *
     * @generated from field: gitpod.v1.FileChange file_change = 1;
     */
    fileChange?: FileChange;
    /**
     * hunks is the list of hunks for the requested file at time of request
     *
     * @generated from field: repeated supervisor.v1.GitHunk hunks = 2;
     */
    hunks: GitHunk[];
    /**
     * is_binary is true when the file is detected as binary (e.g. images, fonts).
     * When true, hunks will be empty.
     *
     * @generated from field: bool is_binary = 3;
     */
    isBinary: boolean;
};
/**
 * Describes the message supervisor.v1.GetGitDiffResponse.
 * Use `create(GetGitDiffResponseSchema)` to create a new message.
 */
export declare const GetGitDiffResponseSchema: GenMessage<GetGitDiffResponse>;
/**
 * @generated from message supervisor.v1.GitHunk
 */
export type GitHunk = Message<"supervisor.v1.GitHunk"> & {
    /**
     * starting line number in original file
     *
     * @generated from field: int32 original_start_line = 1;
     */
    originalStartLine: number;
    /**
     * number of lines the hunk applies to in the original file
     *
     * @generated from field: int32 original_lines = 2;
     */
    originalLines: number;
    /**
     * if > 0, then the original file had a 'No newline at end of file' mark at this offset
     *
     * @generated from field: int32 original_no_newline_at = 3;
     */
    originalNoNewlineAt: number;
    /**
     * starting line number in new file
     *
     * @generated from field: int32 new_start_line = 4;
     */
    newStartLine: number;
    /**
     * number of lines the hunk applies to in the new file
     *
     * @generated from field: int32 new_lines = 5;
     */
    newLines: number;
    /**
     * optional section heading
     *
     * @generated from field: string section = 6;
     */
    section: string;
    /**
     * 0-indexed line offset in unified file diff (including section headers); this is
     * only set when Hunks are read from entire file diff (i.e., when ReadAllHunks is
     * called) This accounts for hunk headers, too, so the StartPosition of the first
     * hunk will be 1.
     *
     * @generated from field: int32 start_position = 7;
     */
    startPosition: number;
    /**
     * hunk body (lines prefixed with '-', '+', or ' '
     *
     * @generated from field: string body = 8;
     */
    body: string;
};
/**
 * Describes the message supervisor.v1.GitHunk.
 * Use `create(GitHunkSchema)` to create a new message.
 */
export declare const GitHunkSchema: GenMessage<GitHunk>;
/**
 * @generated from message supervisor.v1.GetFileDiffContentRequest
 */
export type GetFileDiffContentRequest = Message<"supervisor.v1.GetFileDiffContentRequest"> & {
    /**
     * path is the relative path of the file to get content for
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * include_binary_content, when true, instructs the server to return
     * original_content and new_content even for binary files. By default
     * binary files only set is_binary without content to avoid unnecessary reads.
     *
     * @generated from field: bool include_binary_content = 2;
     */
    includeBinaryContent: boolean;
    /**
     * base_ref is the git ref to diff against (e.g. "origin/main").
     * When empty, original_content comes from HEAD (uncommitted changes only).
     * When set, original_content comes from merge-base(base_ref, HEAD).
     *
     * @generated from field: string base_ref = 3;
     */
    baseRef: string;
};
/**
 * Describes the message supervisor.v1.GetFileDiffContentRequest.
 * Use `create(GetFileDiffContentRequestSchema)` to create a new message.
 */
export declare const GetFileDiffContentRequestSchema: GenMessage<GetFileDiffContentRequest>;
/**
 * @generated from message supervisor.v1.GetFileDiffContentResponse
 */
export type GetFileDiffContentResponse = Message<"supervisor.v1.GetFileDiffContentResponse"> & {
    /**
     * file_change describes the type of change (added, modified, deleted, etc.)
     *
     * @generated from field: gitpod.v1.FileChange file_change = 1;
     */
    fileChange?: FileChange;
    /**
     * original_content is the file content from HEAD/index (empty for new files)
     *
     * @generated from field: bytes original_content = 2;
     */
    originalContent: Uint8Array;
    /**
     * new_content is the current working tree content (empty for deleted files)
     *
     * @generated from field: bytes new_content = 3;
     */
    newContent: Uint8Array;
    /**
     * is_binary is true when the file is detected as binary (e.g. images, fonts).
     * When include_binary_content is not set, original_content and new_content
     * will be empty for binary files.
     *
     * @generated from field: bool is_binary = 4;
     */
    isBinary: boolean;
};
/**
 * Describes the message supervisor.v1.GetFileDiffContentResponse.
 * Use `create(GetFileDiffContentResponseSchema)` to create a new message.
 */
export declare const GetFileDiffContentResponseSchema: GenMessage<GetFileDiffContentResponse>;
/**
 * @generated from message supervisor.v1.GetGitDiffFilesRequest
 */
export type GetGitDiffFilesRequest = Message<"supervisor.v1.GetGitDiffFilesRequest"> & {
    /**
     * base_ref is the git ref to diff against (e.g. "origin/main").
     * When empty, defaults to HEAD and returns uncommitted changes
     * (equivalent to GetGitStatus changed_files).
     * When set, returns all files changed between merge-base(base_ref, HEAD)
     * and the current working tree (committed + uncommitted).
     *
     * @generated from field: string base_ref = 1;
     */
    baseRef: string;
};
/**
 * Describes the message supervisor.v1.GetGitDiffFilesRequest.
 * Use `create(GetGitDiffFilesRequestSchema)` to create a new message.
 */
export declare const GetGitDiffFilesRequestSchema: GenMessage<GetGitDiffFilesRequest>;
/**
 * @generated from message supervisor.v1.GetGitDiffFilesResponse
 */
export type GetGitDiffFilesResponse = Message<"supervisor.v1.GetGitDiffFilesResponse"> & {
    /**
     * changed_files is the list of files that differ between the base ref
     * and the current working tree.
     *
     * @generated from field: repeated gitpod.v1.FileChange changed_files = 1;
     */
    changedFiles: FileChange[];
    /**
     * total_changed_files is the total count of changed files.
     *
     * @generated from field: int32 total_changed_files = 2;
     */
    totalChangedFiles: number;
};
/**
 * Describes the message supervisor.v1.GetGitDiffFilesResponse.
 * Use `create(GetGitDiffFilesResponseSchema)` to create a new message.
 */
export declare const GetGitDiffFilesResponseSchema: GenMessage<GetGitDiffFilesResponse>;
/**
 * @generated from message supervisor.v1.GetDefaultBranchRequest
 */
export type GetDefaultBranchRequest = Message<"supervisor.v1.GetDefaultBranchRequest"> & {};
/**
 * Describes the message supervisor.v1.GetDefaultBranchRequest.
 * Use `create(GetDefaultBranchRequestSchema)` to create a new message.
 */
export declare const GetDefaultBranchRequestSchema: GenMessage<GetDefaultBranchRequest>;
/**
 * @generated from message supervisor.v1.GetDefaultBranchResponse
 */
export type GetDefaultBranchResponse = Message<"supervisor.v1.GetDefaultBranchResponse"> & {
    /**
     * branch is the name of the default branch (e.g. "main").
     *
     * @generated from field: string branch = 1;
     */
    branch: string;
};
/**
 * Describes the message supervisor.v1.GetDefaultBranchResponse.
 * Use `create(GetDefaultBranchResponseSchema)` to create a new message.
 */
export declare const GetDefaultBranchResponseSchema: GenMessage<GetDefaultBranchResponse>;
/**
 * FindRequest specifies criteria for finding files and directories.
 * The response is limited to 65536 entries maximum.
 *
 * @generated from message supervisor.v1.FindRequest
 */
export type FindRequest = Message<"supervisor.v1.FindRequest"> & {
    /**
     * path is the starting directory for the search.
     * Absolute paths (starting with /) resolve to filesystem root.
     * Relative paths resolve relative to the workspace folder.
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * pattern is a glob pattern to match file/directory names
     *
     * @generated from field: string pattern = 2;
     */
    pattern: string;
    /**
     * type filters results by file type
     *
     * @generated from field: supervisor.v1.FindRequest.FileType type = 3;
     */
    type: FindRequest_FileType;
    /**
     * max_depth limits how deep to search (0 = unlimited)
     *
     * @generated from field: int32 max_depth = 4;
     */
    maxDepth: number;
    /**
     * fuzzy enables fuzzy matching for the pattern field.
     * When true, pattern is matched using fuzzy substring matching
     * against relative file paths instead of glob matching against filenames.
     * Default: false (glob matching).
     *
     * @generated from field: bool fuzzy = 5;
     */
    fuzzy: boolean;
};
/**
 * Describes the message supervisor.v1.FindRequest.
 * Use `create(FindRequestSchema)` to create a new message.
 */
export declare const FindRequestSchema: GenMessage<FindRequest>;
/**
 * @generated from enum supervisor.v1.FindRequest.FileType
 */
export declare enum FindRequest_FileType {
    /**
     * @generated from enum value: FILE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: FILE_TYPE_FILE = 1;
     */
    FILE = 1,
    /**
     * @generated from enum value: FILE_TYPE_DIRECTORY = 2;
     */
    DIRECTORY = 2,
    /**
     * @generated from enum value: FILE_TYPE_ANY = 3;
     */
    ANY = 3
}
/**
 * Describes the enum supervisor.v1.FindRequest.FileType.
 */
export declare const FindRequest_FileTypeSchema: GenEnum<FindRequest_FileType>;
/**
 * @generated from message supervisor.v1.FindResponse
 */
export type FindResponse = Message<"supervisor.v1.FindResponse"> & {
    /**
     * files contains matching entries, limited to 65536 maximum.
     * If truncated is true, more entries exist but were not returned.
     *
     * @generated from field: repeated supervisor.v1.FileInfo files = 1;
     */
    files: FileInfo[];
    /**
     * truncated indicates the result was limited due to exceeding 65536 entries
     *
     * @generated from field: bool truncated = 2;
     */
    truncated: boolean;
};
/**
 * Describes the message supervisor.v1.FindResponse.
 * Use `create(FindResponseSchema)` to create a new message.
 */
export declare const FindResponseSchema: GenMessage<FindResponse>;
/**
 * @generated from message supervisor.v1.FileInfo
 */
export type FileInfo = Message<"supervisor.v1.FileInfo"> & {
    /**
     * path is the absolute path
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * is_directory indicates if this is a directory
     *
     * @generated from field: bool is_directory = 2;
     */
    isDirectory: boolean;
    /**
     * size is the file size in bytes (0 for directories)
     *
     * @generated from field: int64 size = 3;
     */
    size: bigint;
};
/**
 * Describes the message supervisor.v1.FileInfo.
 * Use `create(FileInfoSchema)` to create a new message.
 */
export declare const FileInfoSchema: GenMessage<FileInfo>;
/**
 * ReadFileRequest reads file content or lists directory entries
 *
 * @generated from message supervisor.v1.ReadFileRequest
 */
export type ReadFileRequest = Message<"supervisor.v1.ReadFileRequest"> & {
    /**
     * path is the path to the file or directory.
     * Absolute paths (starting with /) resolve to filesystem root.
     * Relative paths resolve relative to the workspace folder.
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * offset is the byte offset to start reading from (ignored for directories)
     *
     * @generated from field: int64 offset = 2;
     */
    offset: bigint;
    /**
     * length is the maximum number of bytes to read (0 = read all, ignored for directories)
     *
     * @generated from field: int64 length = 3;
     */
    length: bigint;
};
/**
 * Describes the message supervisor.v1.ReadFileRequest.
 * Use `create(ReadFileRequestSchema)` to create a new message.
 */
export declare const ReadFileRequestSchema: GenMessage<ReadFileRequest>;
/**
 * @generated from message supervisor.v1.ReadFileResponse
 */
export type ReadFileResponse = Message<"supervisor.v1.ReadFileResponse"> & {
    /**
     * @generated from oneof supervisor.v1.ReadFileResponse.result
     */
    result: {
        /**
         * content is returned when reading a file
         *
         * @generated from field: supervisor.v1.FileContent content = 1;
         */
        value: FileContent;
        case: "content";
    } | {
        /**
         * directory is returned when path is a directory
         *
         * @generated from field: supervisor.v1.DirectoryListing directory = 2;
         */
        value: DirectoryListing;
        case: "directory";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message supervisor.v1.ReadFileResponse.
 * Use `create(ReadFileResponseSchema)` to create a new message.
 */
export declare const ReadFileResponseSchema: GenMessage<ReadFileResponse>;
/**
 * @generated from message supervisor.v1.FileContent
 */
export type FileContent = Message<"supervisor.v1.FileContent"> & {
    /**
     * data is the file content
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * total_size is the total file size in bytes
     *
     * @generated from field: int64 total_size = 2;
     */
    totalSize: bigint;
    /**
     * content_hash is the SHA-256 hash of the returned data (hex encoded)
     *
     * @generated from field: string content_hash = 3;
     */
    contentHash: string;
};
/**
 * Describes the message supervisor.v1.FileContent.
 * Use `create(FileContentSchema)` to create a new message.
 */
export declare const FileContentSchema: GenMessage<FileContent>;
/**
 * @generated from message supervisor.v1.DirectoryListing
 */
export type DirectoryListing = Message<"supervisor.v1.DirectoryListing"> & {
    /**
     * @generated from field: repeated supervisor.v1.FileInfo entries = 1;
     */
    entries: FileInfo[];
};
/**
 * Describes the message supervisor.v1.DirectoryListing.
 * Use `create(DirectoryListingSchema)` to create a new message.
 */
export declare const DirectoryListingSchema: GenMessage<DirectoryListing>;
/**
 * WriteFileRequest writes content to a file
 *
 * @generated from message supervisor.v1.WriteFileRequest
 */
export type WriteFileRequest = Message<"supervisor.v1.WriteFileRequest"> & {
    /**
     * path is the path to the file.
     * Absolute paths (starting with /) resolve to filesystem root.
     * Relative paths resolve relative to the workspace folder.
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * content is the data to write
     *
     * @generated from field: bytes content = 2;
     */
    content: Uint8Array;
    /**
     * mode specifies how to handle existing files
     *
     * @generated from field: supervisor.v1.WriteMode mode = 3;
     */
    mode: WriteMode;
};
/**
 * Describes the message supervisor.v1.WriteFileRequest.
 * Use `create(WriteFileRequestSchema)` to create a new message.
 */
export declare const WriteFileRequestSchema: GenMessage<WriteFileRequest>;
/**
 * @generated from message supervisor.v1.WriteFileResponse
 */
export type WriteFileResponse = Message<"supervisor.v1.WriteFileResponse"> & {
    /**
     * bytes_written is the number of bytes written
     *
     * @generated from field: int64 bytes_written = 1;
     */
    bytesWritten: bigint;
};
/**
 * Describes the message supervisor.v1.WriteFileResponse.
 * Use `create(WriteFileResponseSchema)` to create a new message.
 */
export declare const WriteFileResponseSchema: GenMessage<WriteFileResponse>;
/**
 * @generated from message supervisor.v1.CreateTerminalRequest
 */
export type CreateTerminalRequest = Message<"supervisor.v1.CreateTerminalRequest"> & {
    /**
     * shell is the shell to use (e.g., "/bin/bash"). If empty, uses the user's default shell.
     *
     * @generated from field: string shell = 1;
     */
    shell: string;
    /**
     * working_directory is the initial working directory. If empty, uses the workspace folder.
     *
     * @generated from field: string working_directory = 2;
     */
    workingDirectory: string;
    /**
     * initial_cols is the initial number of columns (default: 80)
     *
     * @generated from field: uint32 initial_cols = 3;
     */
    initialCols: number;
    /**
     * initial_rows is the initial number of rows (default: 24)
     *
     * @generated from field: uint32 initial_rows = 4;
     */
    initialRows: number;
    /**
     * env is additional environment variables to set
     *
     * @generated from field: map<string, string> env = 5;
     */
    env: {
        [key: string]: string;
    };
    /**
     * annotations are arbitrary key-value metadata stored on the terminal.
     * Agents use "ona.com/owner" = "agent" to mark terminals they own.
     *
     * @generated from field: map<string, string> annotations = 6;
     */
    annotations: {
        [key: string]: string;
    };
};
/**
 * Describes the message supervisor.v1.CreateTerminalRequest.
 * Use `create(CreateTerminalRequestSchema)` to create a new message.
 */
export declare const CreateTerminalRequestSchema: GenMessage<CreateTerminalRequest>;
/**
 * @generated from message supervisor.v1.CreateTerminalResponse
 */
export type CreateTerminalResponse = Message<"supervisor.v1.CreateTerminalResponse"> & {
    /**
     * terminal_id is the unique identifier for the created terminal
     *
     * @generated from field: string terminal_id = 1;
     */
    terminalId: string;
};
/**
 * Describes the message supervisor.v1.CreateTerminalResponse.
 * Use `create(CreateTerminalResponseSchema)` to create a new message.
 */
export declare const CreateTerminalResponseSchema: GenMessage<CreateTerminalResponse>;
/**
 * @generated from message supervisor.v1.ReadTerminalRequest
 */
export type ReadTerminalRequest = Message<"supervisor.v1.ReadTerminalRequest"> & {
    /**
     * terminal_id is the terminal to read from
     *
     * @generated from field: string terminal_id = 1;
     */
    terminalId: string;
    /**
     * skip_history, when true, skips sending the scrollback buffer.
     * Use on reconnection to avoid duplicate content.
     *
     * @generated from field: bool skip_history = 2;
     */
    skipHistory: boolean;
};
/**
 * Describes the message supervisor.v1.ReadTerminalRequest.
 * Use `create(ReadTerminalRequestSchema)` to create a new message.
 */
export declare const ReadTerminalRequestSchema: GenMessage<ReadTerminalRequest>;
/**
 * @generated from message supervisor.v1.ReadTerminalResponse
 */
export type ReadTerminalResponse = Message<"supervisor.v1.ReadTerminalResponse"> & {
    /**
     * data is the terminal output
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
};
/**
 * Describes the message supervisor.v1.ReadTerminalResponse.
 * Use `create(ReadTerminalResponseSchema)` to create a new message.
 */
export declare const ReadTerminalResponseSchema: GenMessage<ReadTerminalResponse>;
/**
 * @generated from message supervisor.v1.WriteTerminalRequest
 */
export type WriteTerminalRequest = Message<"supervisor.v1.WriteTerminalRequest"> & {
    /**
     * terminal_id is the terminal to write to
     *
     * @generated from field: string terminal_id = 1;
     */
    terminalId: string;
    /**
     * data is the input to send to the terminal
     *
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
};
/**
 * Describes the message supervisor.v1.WriteTerminalRequest.
 * Use `create(WriteTerminalRequestSchema)` to create a new message.
 */
export declare const WriteTerminalRequestSchema: GenMessage<WriteTerminalRequest>;
/**
 * @generated from message supervisor.v1.WriteTerminalResponse
 */
export type WriteTerminalResponse = Message<"supervisor.v1.WriteTerminalResponse"> & {};
/**
 * Describes the message supervisor.v1.WriteTerminalResponse.
 * Use `create(WriteTerminalResponseSchema)` to create a new message.
 */
export declare const WriteTerminalResponseSchema: GenMessage<WriteTerminalResponse>;
/**
 * @generated from message supervisor.v1.ResizeTerminalRequest
 */
export type ResizeTerminalRequest = Message<"supervisor.v1.ResizeTerminalRequest"> & {
    /**
     * terminal_id is the terminal to resize
     *
     * @generated from field: string terminal_id = 1;
     */
    terminalId: string;
    /**
     * cols is the new number of columns
     *
     * @generated from field: uint32 cols = 2;
     */
    cols: number;
    /**
     * rows is the new number of rows
     *
     * @generated from field: uint32 rows = 3;
     */
    rows: number;
};
/**
 * Describes the message supervisor.v1.ResizeTerminalRequest.
 * Use `create(ResizeTerminalRequestSchema)` to create a new message.
 */
export declare const ResizeTerminalRequestSchema: GenMessage<ResizeTerminalRequest>;
/**
 * @generated from message supervisor.v1.ResizeTerminalResponse
 */
export type ResizeTerminalResponse = Message<"supervisor.v1.ResizeTerminalResponse"> & {};
/**
 * Describes the message supervisor.v1.ResizeTerminalResponse.
 * Use `create(ResizeTerminalResponseSchema)` to create a new message.
 */
export declare const ResizeTerminalResponseSchema: GenMessage<ResizeTerminalResponse>;
/**
 * @generated from message supervisor.v1.CloseTerminalRequest
 */
export type CloseTerminalRequest = Message<"supervisor.v1.CloseTerminalRequest"> & {
    /**
     * terminal_id is the terminal to close
     *
     * @generated from field: string terminal_id = 1;
     */
    terminalId: string;
};
/**
 * Describes the message supervisor.v1.CloseTerminalRequest.
 * Use `create(CloseTerminalRequestSchema)` to create a new message.
 */
export declare const CloseTerminalRequestSchema: GenMessage<CloseTerminalRequest>;
/**
 * @generated from message supervisor.v1.CloseTerminalResponse
 */
export type CloseTerminalResponse = Message<"supervisor.v1.CloseTerminalResponse"> & {};
/**
 * Describes the message supervisor.v1.CloseTerminalResponse.
 * Use `create(CloseTerminalResponseSchema)` to create a new message.
 */
export declare const CloseTerminalResponseSchema: GenMessage<CloseTerminalResponse>;
/**
 * @generated from message supervisor.v1.ListTerminalsRequest
 */
export type ListTerminalsRequest = Message<"supervisor.v1.ListTerminalsRequest"> & {};
/**
 * Describes the message supervisor.v1.ListTerminalsRequest.
 * Use `create(ListTerminalsRequestSchema)` to create a new message.
 */
export declare const ListTerminalsRequestSchema: GenMessage<ListTerminalsRequest>;
/**
 * @generated from message supervisor.v1.ListTerminalsResponse
 */
export type ListTerminalsResponse = Message<"supervisor.v1.ListTerminalsResponse"> & {
    /**
     * @generated from field: repeated supervisor.v1.TerminalInfo terminals = 1;
     */
    terminals: TerminalInfo[];
};
/**
 * Describes the message supervisor.v1.ListTerminalsResponse.
 * Use `create(ListTerminalsResponseSchema)` to create a new message.
 */
export declare const ListTerminalsResponseSchema: GenMessage<ListTerminalsResponse>;
/**
 * @generated from message supervisor.v1.TerminalInfo
 */
export type TerminalInfo = Message<"supervisor.v1.TerminalInfo"> & {
    /**
     * terminal_id is the unique identifier
     *
     * @generated from field: string terminal_id = 1;
     */
    terminalId: string;
    /**
     * shell is the shell being used
     *
     * @generated from field: string shell = 2;
     */
    shell: string;
    /**
     * working_directory is the current working directory
     *
     * @generated from field: string working_directory = 3;
     */
    workingDirectory: string;
    /**
     * cols is the current number of columns
     *
     * @generated from field: uint32 cols = 4;
     */
    cols: number;
    /**
     * rows is the current number of rows
     *
     * @generated from field: uint32 rows = 5;
     */
    rows: number;
    /**
     * created_at is when the terminal was created
     *
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * annotations are arbitrary key-value metadata set at creation time.
     *
     * @generated from field: map<string, string> annotations = 7;
     */
    annotations: {
        [key: string]: string;
    };
};
/**
 * Describes the message supervisor.v1.TerminalInfo.
 * Use `create(TerminalInfoSchema)` to create a new message.
 */
export declare const TerminalInfoSchema: GenMessage<TerminalInfo>;
/**
 * @generated from message supervisor.v1.ExecRequest
 */
export type ExecRequest = Message<"supervisor.v1.ExecRequest"> & {
    /**
     * operation_id is the idempotency key (typically tool_call_id from LLM)
     * Same ID returns cached result if operation completed
     *
     * @generated from field: string operation_id = 1;
     */
    operationId: string;
    /**
     * command is the shell command to execute (run via sh -c)
     *
     * @generated from field: string command = 2;
     */
    command: string;
    /**
     * working_directory (optional, defaults to workspace folder)
     *
     * @generated from field: string working_directory = 3;
     */
    workingDirectory: string;
    /**
     * timeout_seconds for command execution (default: 120, 0 = no timeout)
     *
     * @generated from field: int32 timeout_seconds = 4;
     */
    timeoutSeconds: number;
};
/**
 * Describes the message supervisor.v1.ExecRequest.
 * Use `create(ExecRequestSchema)` to create a new message.
 */
export declare const ExecRequestSchema: GenMessage<ExecRequest>;
/**
 * @generated from message supervisor.v1.ExecResponse
 */
export type ExecResponse = Message<"supervisor.v1.ExecResponse"> & {
    /**
     * exit_code of the command (0 = success)
     *
     * @generated from field: int32 exit_code = 1;
     */
    exitCode: number;
    /**
     * stdout output
     *
     * @generated from field: string stdout = 2;
     */
    stdout: string;
    /**
     * stderr output
     *
     * @generated from field: string stderr = 3;
     */
    stderr: string;
};
/**
 * Describes the message supervisor.v1.ExecResponse.
 * Use `create(ExecResponseSchema)` to create a new message.
 */
export declare const ExecResponseSchema: GenMessage<ExecResponse>;
/**
 * @generated from message supervisor.v1.CancelExecRequest
 */
export type CancelExecRequest = Message<"supervisor.v1.CancelExecRequest"> & {
    /**
     * operation_id of the operation to cancel
     *
     * @generated from field: string operation_id = 1;
     */
    operationId: string;
};
/**
 * Describes the message supervisor.v1.CancelExecRequest.
 * Use `create(CancelExecRequestSchema)` to create a new message.
 */
export declare const CancelExecRequestSchema: GenMessage<CancelExecRequest>;
/**
 * Empty - cancellation is fire-and-forget
 * If operation was running, it's now cancelled
 * If already done or not found, no-op
 *
 * @generated from message supervisor.v1.CancelExecResponse
 */
export type CancelExecResponse = Message<"supervisor.v1.CancelExecResponse"> & {};
/**
 * Describes the message supervisor.v1.CancelExecResponse.
 * Use `create(CancelExecResponseSchema)` to create a new message.
 */
export declare const CancelExecResponseSchema: GenMessage<CancelExecResponse>;
/**
 * @generated from message supervisor.v1.AttachTerminalRequest
 */
export type AttachTerminalRequest = Message<"supervisor.v1.AttachTerminalRequest"> & {
    /**
     * terminal_id is the terminal to attach to
     *
     * @generated from field: string terminal_id = 1;
     */
    terminalId: string;
};
/**
 * Describes the message supervisor.v1.AttachTerminalRequest.
 * Use `create(AttachTerminalRequestSchema)` to create a new message.
 */
export declare const AttachTerminalRequestSchema: GenMessage<AttachTerminalRequest>;
/**
 * @generated from message supervisor.v1.AttachTerminalResponse
 */
export type AttachTerminalResponse = Message<"supervisor.v1.AttachTerminalResponse"> & {
    /**
     * @generated from oneof supervisor.v1.AttachTerminalResponse.content
     */
    content: {
        /**
         * @generated from field: supervisor.v1.TerminalReplay replay = 1;
         */
        value: TerminalReplay;
        case: "replay";
    } | {
        /**
         * @generated from field: supervisor.v1.TerminalData data = 2;
         */
        value: TerminalData;
        case: "data";
    } | {
        /**
         * @generated from field: supervisor.v1.TerminalExited exited = 3;
         */
        value: TerminalExited;
        case: "exited";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message supervisor.v1.AttachTerminalResponse.
 * Use `create(AttachTerminalResponseSchema)` to create a new message.
 */
export declare const AttachTerminalResponseSchema: GenMessage<AttachTerminalResponse>;
/**
 * TerminalReplay contains the terminal replay data
 *
 * @generated from message supervisor.v1.TerminalReplay
 */
export type TerminalReplay = Message<"supervisor.v1.TerminalReplay"> & {
    /**
     * data is the terminal replay output
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: uint32 cols = 2;
     */
    cols: number;
    /**
     * @generated from field: uint32 rows = 3;
     */
    rows: number;
};
/**
 * Describes the message supervisor.v1.TerminalReplay.
 * Use `create(TerminalReplaySchema)` to create a new message.
 */
export declare const TerminalReplaySchema: GenMessage<TerminalReplay>;
/**
 * TerminalData contains a terminal output
 *
 * @generated from message supervisor.v1.TerminalData
 */
export type TerminalData = Message<"supervisor.v1.TerminalData"> & {
    /**
     * data is the terminal output
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
};
/**
 * Describes the message supervisor.v1.TerminalData.
 * Use `create(TerminalDataSchema)` to create a new message.
 */
export declare const TerminalDataSchema: GenMessage<TerminalData>;
/**
 * TerminalExited indicates the terminal process has exited.
 *
 * @generated from message supervisor.v1.TerminalExited
 */
export type TerminalExited = Message<"supervisor.v1.TerminalExited"> & {
    /**
     * @generated from field: int32 exit_code = 1;
     */
    exitCode: number;
};
/**
 * Describes the message supervisor.v1.TerminalExited.
 * Use `create(TerminalExitedSchema)` to create a new message.
 */
export declare const TerminalExitedSchema: GenMessage<TerminalExited>;
/**
 * @generated from message supervisor.v1.WatchRequest
 */
export type WatchRequest = Message<"supervisor.v1.WatchRequest"> & {
    /**
     * Event types to subscribe to. If empty, all event types are delivered.
     *
     * @generated from field: repeated supervisor.v1.WatchEventType event_types = 1;
     */
    eventTypes: WatchEventType[];
    /**
     * Additional glob patterns to exclude from file events (on top of .gitignore).
     * Only applies to FILE_CHANGE events.
     *
     * @generated from field: repeated string file_exclude_patterns = 2;
     */
    fileExcludePatterns: string[];
};
/**
 * Describes the message supervisor.v1.WatchRequest.
 * Use `create(WatchRequestSchema)` to create a new message.
 */
export declare const WatchRequestSchema: GenMessage<WatchRequest>;
/**
 * @generated from message supervisor.v1.WatchResponse
 */
export type WatchResponse = Message<"supervisor.v1.WatchResponse"> & {
    /**
     * @generated from oneof supervisor.v1.WatchResponse.event
     */
    event: {
        /**
         * File system change events (batched).
         *
         * @generated from field: supervisor.v1.FileChangeEvents file_changes = 1;
         */
        value: FileChangeEvents;
        case: "fileChanges";
    } | {
        /**
         * Git status has changed — client should refetch GetGitStatus.
         *
         * @generated from field: supervisor.v1.GitStatusChanged git_status_changed = 2;
         */
        value: GitStatusChanged;
        case: "gitStatusChanged";
    } | {
        /**
         * Overflow: too many events or a re-scan occurred.
         * Client should refetch all relevant state.
         *
         * @generated from field: supervisor.v1.WatchOverflow overflow = 3;
         */
        value: WatchOverflow;
        case: "overflow";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message supervisor.v1.WatchResponse.
 * Use `create(WatchResponseSchema)` to create a new message.
 */
export declare const WatchResponseSchema: GenMessage<WatchResponse>;
/**
 * FileChangeEvents is a batch of file system change events.
 *
 * @generated from message supervisor.v1.FileChangeEvents
 */
export type FileChangeEvents = Message<"supervisor.v1.FileChangeEvents"> & {
    /**
     * @generated from field: repeated supervisor.v1.FileChangeEvent events = 1;
     */
    events: FileChangeEvent[];
};
/**
 * Describes the message supervisor.v1.FileChangeEvents.
 * Use `create(FileChangeEventsSchema)` to create a new message.
 */
export declare const FileChangeEventsSchema: GenMessage<FileChangeEvents>;
/**
 * FileChangeEvent represents a single file system change.
 *
 * @generated from message supervisor.v1.FileChangeEvent
 */
export type FileChangeEvent = Message<"supervisor.v1.FileChangeEvent"> & {
    /**
     * Relative path from the workspace folder root.
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * @generated from field: supervisor.v1.FileChangeType type = 2;
     */
    type: FileChangeType;
    /**
     * True if the path is a directory.
     *
     * @generated from field: bool is_directory = 3;
     */
    isDirectory: boolean;
};
/**
 * Describes the message supervisor.v1.FileChangeEvent.
 * Use `create(FileChangeEventSchema)` to create a new message.
 */
export declare const FileChangeEventSchema: GenMessage<FileChangeEvent>;
/**
 * GitStatusChanged signals that git status has changed (new/modified/deleted
 * tracked files, branch change, etc.). No payload — this is a notification.
 *
 * @generated from message supervisor.v1.GitStatusChanged
 */
export type GitStatusChanged = Message<"supervisor.v1.GitStatusChanged"> & {};
/**
 * Describes the message supervisor.v1.GitStatusChanged.
 * Use `create(GitStatusChangedSchema)` to create a new message.
 */
export declare const GitStatusChangedSchema: GenMessage<GitStatusChanged>;
/**
 * @generated from message supervisor.v1.ListTerminalProfilesRequest
 */
export type ListTerminalProfilesRequest = Message<"supervisor.v1.ListTerminalProfilesRequest"> & {
    /**
     * include_detected_profiles controls whether shells from /etc/shells are
     * auto-detected. When false only config_profiles are returned.
     *
     * @generated from field: bool include_detected_profiles = 1;
     */
    includeDetectedProfiles: boolean;
    /**
     * config_profiles are user-configured terminal profiles keyed by display name.
     * These take precedence over auto-detected profiles from /etc/shells, which
     * often includes irrelevant entries (rbash, dash, sh, etc.).
     * A profile with an empty path disables the detected profile of the same name.
     *
     * @generated from field: map<string, supervisor.v1.ConfigTerminalProfile> config_profiles = 2;
     */
    configProfiles: {
        [key: string]: ConfigTerminalProfile;
    };
};
/**
 * Describes the message supervisor.v1.ListTerminalProfilesRequest.
 * Use `create(ListTerminalProfilesRequestSchema)` to create a new message.
 */
export declare const ListTerminalProfilesRequestSchema: GenMessage<ListTerminalProfilesRequest>;
/**
 * ConfigTerminalProfile is a user-configured terminal profile entry.
 * Using a message instead of a scalar allows fields to be added later
 * (e.g. args, env, icon) without breaking existing callers.
 *
 * @generated from message supervisor.v1.ConfigTerminalProfile
 */
export type ConfigTerminalProfile = Message<"supervisor.v1.ConfigTerminalProfile"> & {
    /**
     * path is the absolute path to the shell executable.
     * Empty string means the profile is explicitly disabled.
     *
     * @generated from field: string path = 1;
     */
    path: string;
};
/**
 * Describes the message supervisor.v1.ConfigTerminalProfile.
 * Use `create(ConfigTerminalProfileSchema)` to create a new message.
 */
export declare const ConfigTerminalProfileSchema: GenMessage<ConfigTerminalProfile>;
/**
 * @generated from message supervisor.v1.ListTerminalProfilesResponse
 */
export type ListTerminalProfilesResponse = Message<"supervisor.v1.ListTerminalProfilesResponse"> & {
    /**
     * @generated from field: repeated supervisor.v1.TerminalProfile profiles = 1;
     */
    profiles: TerminalProfile[];
};
/**
 * Describes the message supervisor.v1.ListTerminalProfilesResponse.
 * Use `create(ListTerminalProfilesResponseSchema)` to create a new message.
 */
export declare const ListTerminalProfilesResponseSchema: GenMessage<ListTerminalProfilesResponse>;
/**
 * TerminalProfile describes a shell profile available inside the devcontainer.
 *
 * @generated from message supervisor.v1.TerminalProfile
 */
export type TerminalProfile = Message<"supervisor.v1.TerminalProfile"> & {
    /**
     * profile_name is the display name (e.g. "bash", "zsh", "bash (2)").
     * Duplicate basenames from /etc/shells are disambiguated with a numeric suffix.
     *
     * @generated from field: string profile_name = 1;
     */
    profileName: string;
    /**
     * path is the absolute, validated path to the shell executable.
     *
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * is_auto_detected is true when the profile originates from /etc/shells
     * auto-detection, and false when it comes from the caller-supplied
     * config_profiles map.
     *
     * @generated from field: bool is_auto_detected = 3;
     */
    isAutoDetected: boolean;
};
/**
 * Describes the message supervisor.v1.TerminalProfile.
 * Use `create(TerminalProfileSchema)` to create a new message.
 */
export declare const TerminalProfileSchema: GenMessage<TerminalProfile>;
/**
 * WatchOverflow signals that the watcher experienced an overflow or re-scan.
 * The client should refetch all file listings and git status.
 *
 * @generated from message supervisor.v1.WatchOverflow
 */
export type WatchOverflow = Message<"supervisor.v1.WatchOverflow"> & {
    /**
     * Human-readable reason for the overflow.
     *
     * @generated from field: string reason = 1;
     */
    reason: string;
};
/**
 * Describes the message supervisor.v1.WatchOverflow.
 * Use `create(WatchOverflowSchema)` to create a new message.
 */
export declare const WatchOverflowSchema: GenMessage<WatchOverflow>;
/**
 * @generated from message supervisor.v1.ListCapabilitiesRequest
 */
export type ListCapabilitiesRequest = Message<"supervisor.v1.ListCapabilitiesRequest"> & {};
/**
 * Describes the message supervisor.v1.ListCapabilitiesRequest.
 * Use `create(ListCapabilitiesRequestSchema)` to create a new message.
 */
export declare const ListCapabilitiesRequestSchema: GenMessage<ListCapabilitiesRequest>;
/**
 * @generated from message supervisor.v1.ListCapabilitiesResponse
 */
export type ListCapabilitiesResponse = Message<"supervisor.v1.ListCapabilitiesResponse"> & {
    /**
     * capabilities lists every optional feature supported by this supervisor.
     * The order is not significant. An empty list means no optional
     * capabilities are advertised.
     *
     * @generated from field: repeated supervisor.v1.Capability capabilities = 1;
     */
    capabilities: Capability[];
};
/**
 * Describes the message supervisor.v1.ListCapabilitiesResponse.
 * Use `create(ListCapabilitiesResponseSchema)` to create a new message.
 */
export declare const ListCapabilitiesResponseSchema: GenMessage<ListCapabilitiesResponse>;
/**
 * @generated from message supervisor.v1.StartBrowserRequest
 */
export type StartBrowserRequest = Message<"supervisor.v1.StartBrowserRequest"> & {};
/**
 * Describes the message supervisor.v1.StartBrowserRequest.
 * Use `create(StartBrowserRequestSchema)` to create a new message.
 */
export declare const StartBrowserRequestSchema: GenMessage<StartBrowserRequest>;
/**
 * @generated from message supervisor.v1.StartBrowserResponse
 */
export type StartBrowserResponse = Message<"supervisor.v1.StartBrowserResponse"> & {
    /**
     * proxy_port is the host-network port the in-container proxy listens on
     * once the browser is ready.
     *
     * @generated from field: uint32 proxy_port = 1;
     */
    proxyPort: number;
    /**
     * container_name is the well-known docker container name for the
     * ona-browser sibling container.
     *
     * @generated from field: string container_name = 2;
     */
    containerName: string;
    /**
     * was_already_running is true if the proxy was already healthy when the
     * RPC was called and no docker pull/run was performed.
     *
     * @generated from field: bool was_already_running = 3;
     */
    wasAlreadyRunning: boolean;
};
/**
 * Describes the message supervisor.v1.StartBrowserResponse.
 * Use `create(StartBrowserResponseSchema)` to create a new message.
 */
export declare const StartBrowserResponseSchema: GenMessage<StartBrowserResponse>;
/**
 * WriteMode specifies how WriteFile handles existing files
 *
 * @generated from enum supervisor.v1.WriteMode
 */
export declare enum WriteMode {
    /**
     * WRITE_MODE_UNSPECIFIED defaults to CREATE_OR_TRUNCATE
     *
     * @generated from enum value: WRITE_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * WRITE_MODE_CREATE fails if the file already exists
     *
     * @generated from enum value: WRITE_MODE_CREATE = 1;
     */
    CREATE = 1,
    /**
     * WRITE_MODE_TRUNCATE overwrites the file, fails if it doesn't exist
     *
     * @generated from enum value: WRITE_MODE_TRUNCATE = 2;
     */
    TRUNCATE = 2,
    /**
     * WRITE_MODE_CREATE_OR_TRUNCATE creates or overwrites the file
     *
     * @generated from enum value: WRITE_MODE_CREATE_OR_TRUNCATE = 3;
     */
    CREATE_OR_TRUNCATE = 3,
    /**
     * WRITE_MODE_APPEND appends to the file, fails if it doesn't exist
     *
     * @generated from enum value: WRITE_MODE_APPEND = 4;
     */
    APPEND = 4
}
/**
 * Describes the enum supervisor.v1.WriteMode.
 */
export declare const WriteModeSchema: GenEnum<WriteMode>;
/**
 * WatchEventType specifies which event types a Watch client wants to receive.
 *
 * @generated from enum supervisor.v1.WatchEventType
 */
export declare enum WatchEventType {
    /**
     * @generated from enum value: WATCH_EVENT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: WATCH_EVENT_TYPE_FILE_CHANGE = 1;
     */
    FILE_CHANGE = 1,
    /**
     * @generated from enum value: WATCH_EVENT_TYPE_GIT_STATUS = 2;
     */
    GIT_STATUS = 2
}
/**
 * Describes the enum supervisor.v1.WatchEventType.
 */
export declare const WatchEventTypeSchema: GenEnum<WatchEventType>;
/**
 * FileChangeType describes the kind of file system change.
 *
 * @generated from enum supervisor.v1.FileChangeType
 */
export declare enum FileChangeType {
    /**
     * @generated from enum value: FILE_CHANGE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: FILE_CHANGE_TYPE_CREATED = 1;
     */
    CREATED = 1,
    /**
     * @generated from enum value: FILE_CHANGE_TYPE_UPDATED = 2;
     */
    UPDATED = 2,
    /**
     * @generated from enum value: FILE_CHANGE_TYPE_DELETED = 3;
     */
    DELETED = 3
}
/**
 * Describes the enum supervisor.v1.FileChangeType.
 */
export declare const FileChangeTypeSchema: GenEnum<FileChangeType>;
/**
 * Capability identifies an optional supervisor feature that a client can
 * rely on when advertised. New capabilities are additive; clients must
 * ignore values they do not recognise.
 *
 * @generated from enum supervisor.v1.Capability
 */
export declare enum Capability {
    /**
     * @generated from enum value: CAPABILITY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * CAPABILITY_WATCH indicates that the Watch RPC is wired up and will
     * emit file system and git status events. When absent, clients should
     * fall back to polling GetGitStatus and re-reading directory listings.
     *
     * @generated from enum value: CAPABILITY_WATCH = 1;
     */
    WATCH = 1,
    /**
     * CAPABILITY_BROWSER indicates that the StartBrowser RPC is implemented
     * and the supervisor can launch the ona-browser sibling container on
     * demand. When absent, clients should not offer browser-dependent
     * features (e.g. agent web browsing).
     *
     * @generated from enum value: CAPABILITY_BROWSER = 2;
     */
    BROWSER = 2
}
/**
 * Describes the enum supervisor.v1.Capability.
 */
export declare const CapabilitySchema: GenEnum<Capability>;
/**
 * @generated from service supervisor.v1.EnvironmentOpsService
 */
export declare const EnvironmentOpsService: GenService<{
    /**
     * @generated from rpc supervisor.v1.EnvironmentOpsService.GetGitStatus
     */
    getGitStatus: {
        methodKind: "unary";
        input: typeof GetGitStatusRequestSchema;
        output: typeof GetGitStatusResponseSchema;
    };
    /**
     * @generated from rpc supervisor.v1.EnvironmentOpsService.GetGitDiff
     */
    getGitDiff: {
        methodKind: "unary";
        input: typeof GetGitDiffRequestSchema;
        output: typeof GetGitDiffResponseSchema;
    };
    /**
     * GetFileDiffContent returns the original and new file content for client-side diffing.
     * This allows the frontend to compute diffs without relying on pre-parsed hunks.
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.GetFileDiffContent
     */
    getFileDiffContent: {
        methodKind: "unary";
        input: typeof GetFileDiffContentRequestSchema;
        output: typeof GetFileDiffContentResponseSchema;
    };
    /**
     * GetGitDiffFiles returns the list of files that differ between a base ref and the
     * current working tree. Use this to discover which files to request diffs for via
     * GetGitDiff or GetFileDiffContent.
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.GetGitDiffFiles
     */
    getGitDiffFiles: {
        methodKind: "unary";
        input: typeof GetGitDiffFilesRequestSchema;
        output: typeof GetGitDiffFilesResponseSchema;
    };
    /**
     * GetDefaultBranch returns the name of the default branch (e.g. "main").
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.GetDefaultBranch
     */
    getDefaultBranch: {
        methodKind: "unary";
        input: typeof GetDefaultBranchRequestSchema;
        output: typeof GetDefaultBranchResponseSchema;
    };
    /**
     * Find searches for files and directories matching the given criteria
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.Find
     */
    find: {
        methodKind: "unary";
        input: typeof FindRequestSchema;
        output: typeof FindResponseSchema;
    };
    /**
     * ReadFile reads file content or lists directory entries
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.ReadFile
     */
    readFile: {
        methodKind: "unary";
        input: typeof ReadFileRequestSchema;
        output: typeof ReadFileResponseSchema;
    };
    /**
     * WriteFile writes content to a file
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.WriteFile
     */
    writeFile: {
        methodKind: "unary";
        input: typeof WriteFileRequestSchema;
        output: typeof WriteFileResponseSchema;
    };
    /**
     * CreateTerminal creates a new terminal session
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.CreateTerminal
     */
    createTerminal: {
        methodKind: "unary";
        input: typeof CreateTerminalRequestSchema;
        output: typeof CreateTerminalResponseSchema;
    };
    /**
     * ReadTerminal streams terminal output to the client.
     * Multiple clients can read from the same terminal concurrently.
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.ReadTerminal
     */
    readTerminal: {
        methodKind: "server_streaming";
        input: typeof ReadTerminalRequestSchema;
        output: typeof ReadTerminalResponseSchema;
    };
    /**
     * WriteTerminal sends input to a terminal
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.WriteTerminal
     */
    writeTerminal: {
        methodKind: "unary";
        input: typeof WriteTerminalRequestSchema;
        output: typeof WriteTerminalResponseSchema;
    };
    /**
     * ResizeTerminal updates terminal dimensions
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.ResizeTerminal
     */
    resizeTerminal: {
        methodKind: "unary";
        input: typeof ResizeTerminalRequestSchema;
        output: typeof ResizeTerminalResponseSchema;
    };
    /**
     * CloseTerminal destroys a terminal session
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.CloseTerminal
     */
    closeTerminal: {
        methodKind: "unary";
        input: typeof CloseTerminalRequestSchema;
        output: typeof CloseTerminalResponseSchema;
    };
    /**
     * ListTerminals returns all active terminal sessions
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.ListTerminals
     */
    listTerminals: {
        methodKind: "unary";
        input: typeof ListTerminalsRequestSchema;
        output: typeof ListTerminalsResponseSchema;
    };
    /**
     * AttachTerminal streams terminal buffer state to the client.
     * The first message is always a TerminalSnapshot containing the full buffer.
     * Subsequent messages are TerminalDiffs with incremental updates.
     * If the client detects a version gap, it should re-attach to get a fresh snapshot.
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.AttachTerminal
     */
    attachTerminal: {
        methodKind: "server_streaming";
        input: typeof AttachTerminalRequestSchema;
        output: typeof AttachTerminalResponseSchema;
    };
    /**
     * Exec executes a command in the environment.
     * - Idempotent: same operation_id returns cached result if completed
     * - Durable: survives caller disconnection, results stored on filesystem
     * - Blocking: waits for completion
     * - Context cancellation is treated as transient (operation continues)
     * - Use CancelExec for explicit user cancellation
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.Exec
     */
    exec: {
        methodKind: "unary";
        input: typeof ExecRequestSchema;
        output: typeof ExecResponseSchema;
    };
    /**
     * CancelExec explicitly cancels an operation (user intent to stop)
     * Fire-and-forget: no error if operation not found or already completed
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.CancelExec
     */
    cancelExec: {
        methodKind: "unary";
        input: typeof CancelExecRequestSchema;
        output: typeof CancelExecResponseSchema;
    };
    /**
     * Watch streams workspace events to the client. Events are batched and
     * coalesced to reduce noise. The client can filter which event types
     * it wants to receive.
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.Watch
     */
    watch: {
        methodKind: "server_streaming";
        input: typeof WatchRequestSchema;
        output: typeof WatchResponseSchema;
    };
    /**
     * ListTerminalProfiles returns all available shell profiles detected from
     * /etc/shells on the host system.
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.ListTerminalProfiles
     */
    listTerminalProfiles: {
        methodKind: "unary";
        input: typeof ListTerminalProfilesRequestSchema;
        output: typeof ListTerminalProfilesResponseSchema;
    };
    /**
     * ListCapabilities returns the set of optional capabilities supported by
     * this supervisor. Clients should call this once per session to discover
     * which optional features (e.g. Watch) are available, instead of probing
     * by issuing the RPC and inspecting Unimplemented errors.
     *
     * Supervisors that predate this RPC will return Unimplemented; clients
     * should treat that as "no optional capabilities advertised" and fall
     * back to legacy behavior.
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.ListCapabilities
     */
    listCapabilities: {
        methodKind: "unary";
        input: typeof ListCapabilitiesRequestSchema;
        output: typeof ListCapabilitiesResponseSchema;
    };
    /**
     * StartBrowser ensures the ona-browser sibling container is running and
     * its proxy is reachable on the local proxy port. Idempotent: if the
     * container is already healthy, returns immediately with
     * was_already_running=true. Concurrent calls are coalesced inside the
     * supervisor so only one docker pull/run happens at a time.
     *
     * @generated from rpc supervisor.v1.EnvironmentOpsService.StartBrowser
     */
    startBrowser: {
        methodKind: "unary";
        input: typeof StartBrowserRequestSchema;
        output: typeof StartBrowserResponseSchema;
    };
}>;
