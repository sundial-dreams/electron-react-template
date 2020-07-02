cmake_minimum_required(VERSION 3.13)
project(native)
set(CMAKE_CXX_STANDARD 14)

include_directories(/users/dengpengfei/.node-gyp/12.16.2/include/node)
include_directories(node_modules/node-addon-api)
add_executable(native native/main.cpp)